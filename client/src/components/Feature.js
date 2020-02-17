import React from "react";
import requireAuth from "./requestAuth";

const Feature = () => {
  return <div>This is the feature !</div>;
};

export default requireAuth(Feature);
