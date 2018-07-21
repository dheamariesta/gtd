import React from "react";
import Slider from "react-slick";
import defaultSettings from "../defaults/SliderSetting";
import LeaderSlide from "../components/LeaderSlide";


export class LeaderSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leaders: [
        {
          id: 1,
          image: "/images/house_leader_jeffrey.jpg",
          details: "Vindici",
        },
        {
          id: 2,
          image: "/images/house_leader_cerwyn.jpg",
          details: "Magnus",
        },
        {
          id: 3,
          image: "/images/house_leader_sergi.jpg",
          details: "Regulus",
        },
        {
          id: 4,
          image: "/images/house_leader_kezia.jpg",
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
              <LeaderSlide
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
