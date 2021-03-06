import React from "react";
import FontAwesome from "react-fontawesome";
import Section from "../components/Section";

import { ExodiaTopBar } from "../components/Topbar";
import { Col, Image, Row } from "react-bootstrap";
import { StyledLeaderSlider, StyledPortfolioSlider } from "../containers/Slider";
import { ExodiaThemedButton } from "../components/Button";

const Exodia = () => (
  <React.Fragment>
    <Row className={"full-height bg-batik exodia"}>
      <ExodiaTopBar/>
      <Section name={"banner-exodia"} className={"full-height flex-center"}>
        <Row className={"row-center"}>
          <Col md={6} xs={12} className={"col-center"}>
            <Image src={"images/exodia-logo.png"} responsive/>
            <h1 className={"exodia-title"}>EXODIA</h1>
            <p>United We Stand</p>
          </Col>
        </Row>
      </Section>

      <Section name={"foreword"} className={"full-height"}>
        <Row>
          <Col xs={12} md={5} mdPush={1}>
            <Image src={"images/ALFONS.jpg"} className="alfons-image" responsive/>
          </Col>
          <Col xs={12} md={5}>
            <h1 className={"exodia-section-title"}>Foreword</h1>
            <p>Greetings to all Exodians, </p>
            <p>Exodia has been a land of dream where we live peacefully and prosper. People from all around the
              world are trying to achieve what we have. I cannot be more proud of that.
            </p>
            <p>
              However, in the past few weeks, a lot of incidents have happened and disturbed our society. Our friends and
              families have been injured because of the chaos. Together with all the house leaders, we had an emergency
              meeting to discuss this and we are still searching for the real cause of the incidents. We have learned
              one thing: the traitor who was once banished, Rick, has returned to this kingdom.
            </p>

            <p>
              We do not know what is coming next. Nevertheless, the only certain thing is that we need to take actions.
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

        </Row>
      </Section>

      <Section name={"leaders"} className={"full-height"}>
				<h1 className={"exodia-section-title"}>Meet Your Leaders</h1>
        <Row className={"flex-center row-center height-80vh"}>
          <Col xs={12} md={10} className={"col-center"}>
            <StyledLeaderSlider/>
          </Col>
        </Row>
      </Section>

      <Section name={"committee"} className={"full-height"}>
        <h1 className={"exodia-section-title"}>Our Committee</h1>
        <Row className={"flex-center row-center height-80vh"}>
          <Col xs={12} md={10} className={"col-center"}>
            <StyledPortfolioSlider/>
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

      <Section name={"booklet"} className={"height-65vh"}>
        <FontAwesome name={"heart-o"} size={"5x"} style={{ color: "white", borderRadius: "50%", }} border/>
        <h1 className={"exodia-section-title"}>Freshie, Get Your Booklet Here!</h1>
        <a href={process.env.MIX_BOOKLET_LINK} target="_blank">
          <ExodiaThemedButton bsSize={"large"}>
            Download
          </ExodiaThemedButton>
        </a>
      </Section>
    </Row>
  </React.Fragment>
);

export default Exodia;
