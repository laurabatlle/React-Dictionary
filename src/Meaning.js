import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>{" "}
      {props.meanings.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {props.meanings.definition}
              <br />
              <strong>Example: </strong>
              <em>{props.meanings.example}</em>
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
