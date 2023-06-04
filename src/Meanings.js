import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
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
