import React from "react";
import FontAwesome from "react-fontawesome";

const Loading = ({ text }) => {
  return (
    <React.Fragment>
      <FontAwesome name={"spinner"} spin />{" "}
      {text}
    </React.Fragment>
  );
};

export default Loading;
