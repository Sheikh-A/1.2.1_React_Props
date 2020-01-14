import React, { useState } from "react";
import { placesInUtah, favNumberFn } from "../data";
import DataProps from "./DataProps";
import Greeting from "./Greeting";
import PersonDescription from "./PersonDescription";

const App = () => {
  const [places, setPlaces] = useState(placesInUtah);
  return (
    <div>
      <h1>This is our new app</h1>
      <DataProps data={places} />
      <Greeting name="Ali" newProp="testdata" />
      <PersonDescription description="Teach" favNumber={favNumberFn} />

      <Greeting name="Rali" newProp="testdata" />
      <PersonDescription description="Eat" favNumber={favNumberFn} />

      <Greeting name="Tali" newProp="testdata" />
      <PersonDescription description="Sleep" favNumber={favNumberFn} />
    </div>
  );
};

export default App;
