import React from "react";

export const Vision = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1 className="title">Our Vision</h1>
      <div className="vision-container">
        <p className="vision">
          To welcome new Indonesian freshmen in NTU
        </p>
      </div>
    </div>
  )
};