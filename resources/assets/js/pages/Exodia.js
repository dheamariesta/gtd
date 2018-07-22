import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import { ExodiaTopBar } from "../components/Topbar";
import { LeaderSlider, PortFolioSlider } from "../containers/Slider";


const Exodia = () => (
  <React.Fragment>
    <Row className={"full-height bg-batik exodia"}>
      <ExodiaTopBar/>
      <section className="banner-exodia">
        <Col xs={12} className="full-height flex-center">
          <Row>
            <Col md={6} mdPush={3} xs={12}>
              <Image src={"images/exodia-logo.png"} responsive/>
              <h1 className={"exodia-title"}>EXODIA</h1>
              <p>United We Stand</p>
            </Col>
          </Row>
        </Col>
      </section>
      <section className="foreword">
        <Col xs={12} className={"full-height"}>
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
            <Col md={6} mdPush={2}>
              <Image src={"images/alfons.png"} responsive/>
            </Col>

          </Row>
        </Col>
      </section>
      <section className="leaders">
        <Col xs={12} className={"full-height"}>
          <Row className={"row-center"}>
            <h1 className="exodia-section-title">Meet Your Leaders</h1>
            <Col xs={12} md={10} className={"col-center"}>
              <LeaderSlider/>
            </Col>
          </Row>
        </Col>
      </section>
      <section className="committee">
        <Col xs={12} className={"full-height"}>
          <h1 className={"exodia-section-title"}>Our Committee</h1>
          <Row className={"row-center"}>
            <Col xs={12} md={10} className={"col-center"}>
             <PortFolioSlider/>
            </Col>
          </Row>
        </Col>
      </section>

      <section className="footer">
        <Col xs={12} className={"full-height"}>

        </Col>
      </section>
    </Row>
  </React.Fragment>
);

export default Exodia;
