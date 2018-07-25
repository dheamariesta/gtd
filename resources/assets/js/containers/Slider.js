import React from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";

import defaultSettings from "../defaults/SliderSetting";
import StyledSlide from "../components/Slide";


const settings = {
  ...defaultSettings,
  centerMode: true,
};

const StyledCenteredSlider = css`
  .slick-slide {
    h1 {
      display: none;
    }
    &.slick-center {
      transition: transform .5s ease-in-out;
      transform: scale(1.05);
      h1 {
        display: block;
      }
    }
  }   
`;

class LeaderSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leaders: [
        {
          id: 1,
          src: "/images/house_leader_jeffrey.jpg",
          details: "Vindici",
        },
        {
          id: 2,
          src: "/images/house_leader_cerwyn.jpg",
          details: "Magnus",
        },
        {
          id: 3,
          src: "/images/house_leader_sergi.jpg",
          details: "Regulus",
        },
        {
          id: 4,
          src: "/images/house_leader_kezia.jpg",
          details: "Altair",
        },
      ],
    };
  }


  render() {
    const { leaders } = this.state;
    const { ...props } = this.props;
    return (
      <React.Fragment>
        <Slider {...settings} {...props}>
          {leaders.map(leader => {
            return (
              <StyledSlide key={leader.id} data={leader} />
            );
          })
          }
        </Slider>
      </React.Fragment>
    );
  }
}

export const StyledLeaderSlider = styled(LeaderSlider)`
  ${StyledCenteredSlider}
`;

class PortFolioSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      portfols: [
        {
          id: 1,
          src: "/images/portfol_ppit.jpg",
          details: 'PPIT'
        },
        {
          id: 2,
          src: "/images/portfol_gl.jpg",
          details: 'GL'
        },
        {
          id: 3,
          src: "/images/portfol_mc.jpg",
          details: 'MC'
        },
        {
          id: 4,
          src: "/images/portfol_welf.jpg",
          details: 'Welfare'
        },
        {
          id: 5,
          src: "/images/portfol_logs.jpg",
          details: 'Logs'
        },
        {
          id: 6,
          src: "/images/portfol_po.jpg",
          details: 'PO'
        },
        {
          id: 7,
          src: "/images/portfol_bfm.jpg",
          details: 'BFM'
        },
      ]
    }
  }

  render() {
    const { portfols } = this.state;
    const { ...props } = this.props;
    return (
      <React.Fragment>
        <Slider {...settings} {...props}>
          {portfols.map(p => {
            return <StyledSlide key={p.id} data={p}/>
          })
          }
        </Slider>
      </React.Fragment>
    );
  }
}

export const StyledPortfolioSlider = styled(PortFolioSlider)`
  ${StyledCenteredSlider}
`;
