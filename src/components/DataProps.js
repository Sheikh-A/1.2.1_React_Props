import React from "react";

export default function DataProps(props) {
  console.log(props);

  return (
    <div>
      <h3>List of utah places</h3>
      <ul>
        {props.data.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
}
