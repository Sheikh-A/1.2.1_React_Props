import React from "react";

const Greeting = props => {
  console.log("Props in Greeting", props);
  const welcomeMsg = `Welcome ${props.name}`;
  return <h1>{welcomeMsg}</h1>;
};

export default Greeting;
