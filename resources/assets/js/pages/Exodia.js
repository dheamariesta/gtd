import React from "react";
import FontAwesome from "react-fontawesome";
import { ExodiaTopBar } from "../components/Topbar";
import { Row, Col, Image, Button } from "react-bootstrap";
import { LeaderSlider, PortFolioSlider } from "../containers/Slider";
import Section from "../components/Section";


const Exodia = () => (
  <React.Fragment>
    <Row className={"full-height bg-batik exodia"}>
      <ExodiaTopBar/>
      <Section name={"banner-exodia"} className={"full-height flex-center"}>
        <Row>
          <Col md={6} mdPush={3} xs={12}>
            <Image src={"images/exodia-logo.png"} responsive/>
            <h1 className={"exodia-title"}>EXODIA</h1>
            <p>United We Stand</p>
          </Col>
        </Row>
      </Section>

      <Section name={"foreword"} className={"full-height"}>
        <Row>
          <Col xs={12} md={4} mdPush={1}>
            <h1 className={"exodia-section-title"}>Foreword</h1>
            <p> Greetings to all Exodians, </p>
            <p>Exodia has been a land of dream where we live peacefully and prosper here. People from all around the
              world are trying to achieve what we have. I cannot be more proud of that.
            </p>
            <p>
              However, in the past few weeks, a lot of incidents has happened and disturbed our society. Our friends and
              families are injured because of the chaos. Together with all the house leaders, we had an emergency
              meeting to discuss this and we are still in search for the real cause of the incident. But we have learned
              one thing: the traitor that once banished, Rick, has returned to this kingdom.
            </p>

            <p>
              We do not know what is coming next. After all, the only certain thing is, we need to take action.
              Therefore, I will see you at The Plaza under the judgment place.
            </p>

            <p>
              Let’s stay united and get our peaceful Exodia back.
            </p>

            <p>
              Your king, <br/>
              Alphonse
            </p>
          </Col>
          <Col xs={12} md={6} mdPush={2}>
            <Image src={"images/alfons.png"} responsive/>
          </Col>
        </Row>
      </Section>

      <Section name={"leaders"} className={"full-height"}>
        <Row className={"row-center"}>
          <h1 className={"exodia-section-title"}>Meet Your Leaders</h1>
          <Col xs={12} md={10} className={"col-center"}>
            <LeaderSlider/>
          </Col>
        </Row>
      </Section>

      <Section name={"committee"} className={"full-height"}>
        <h1 className={"exodia-section-title"}>Our Committee</h1>
        <Row className={"row-center"}>
          <Col xs={12} md={10} className={"col-center"}>
            <PortFolioSlider/>
          </Col>
        </Row>
      </Section>

      <Section name={"sponsor"} className={"full-height"}>
        <h1 className={"exodia-section-title"}>Sponsored by: </h1>
        <Row className={"flex-center row-center height-80vh"}>
          <Col xs={12} md={10} className={"col-center"}>
            <Image src={"/images/sponsor.jpg"} responsive/>
          </Col>
        </Row>
      </Section>

      <Section name={"handbook"} className={"height-65vh"}>
        <FontAwesome name={"heart-o"} size={"5x"} style={{ color: "white", borderRadius: "50%", }} border/>
        <h1 className={"exodia-section-title"}>Freshie, Get Your Handbook Here!</h1>
        <Button bsSize={"large"} className={"download-button"}>
          Download
        </Button>
      </Section>
    </Row>
  </React.Fragment>
);

export default Exodia;
