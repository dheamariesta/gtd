import React from "react"
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import axios from "axios";
import Loading from "./Loading";


export const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
};

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true }, () => {
      const { name, email, message } = this.state;
      axios
        .post('/send', { name, email, message })
        .then(response => {
          const { message } = response.data;
          this.props.onSuccess(message);
          this.setState({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch(error => {
          const { errors } = error.response.data;
          this.props.onError(errors);
        })
        .then(() => {
          this.setState({
            loading: false,
          });
        })
      ;
    })
  }

  onChangeName(e) {
    const name = e.target.value;
    this.setState({
      name: name
    })
  }

  onChangeEmail(e) {
    const email = e.target.value;
    this.setState({
      email: email
    })
  }

  onChangeMessage(e) {
    const message = e.target.value;
    this.setState({
      message: message
    });
  }

  render() {
    const { actionHandler } = this.props;
    const { loading, name, email, message } = this.state;
    return (
      <form action={actionHandler} method="POST" onSubmit={this.handleSubmit}>
        <FieldGroup
          id="formControlsName"
          type="text"
          label="name"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={this.onChangeName}


        />
        <FieldGroup
          id="formControlsEmail"
          type="text"
          label="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={this.onChangeEmail}

        />
        <FieldGroup
          id="formControlsTextarea"
          componentClass="textarea"
          label="message"
          placeholder="Enter message"
          name="message"
          value={message}
          cols="30"
          rows="10"
          onChange={this.onChangeMessage}
        />

        <FormGroup>
          <Button type="submit" bsStyle="primary" bsSize="large" block disabled={loading}>
            {loading ? (<Loading text={"Submitting..."}/>) : 'Submit'}
          </Button>
        </FormGroup>
      </form>
    )
  }
}