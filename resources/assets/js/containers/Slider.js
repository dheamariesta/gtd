import React from "react";
import Slider from "react-slick";
import defaultSettings from "../defaults/SliderSetting";
import Slide from "../components/Slide";


export class LeaderSlider extends React.Component {
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
    const settings = {
      ...defaultSettings,
      centerMode: true,
    };
    const { leaders } = this.state;
    return (
      <React.Fragment>
        <Slider {...settings}>
          {leaders.map(leader => {
            return (
              <Slide
                key={leader.id}
                data={leader}
                className={"leader-slide"}
              />
            );
          })
          }
        </Slider>
      </React.Fragment>
    );
  }
}

export class PortFolioSlider extends React.Component {
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
    const settings = {
      ...defaultSettings,
      centerMode: true,
    };
    const { portfols } = this.state;
    return (
      <React.Fragment>
        <Slider {...settings}>
          {portfols.map(p => {
            return <Slide key={p.id} data={p} className={"portfol-slide"}/>
          })
          }
        </Slider>
      </React.Fragment>
    );
  }
}
