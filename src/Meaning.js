import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {" "}
        <strong>Definition:</strong>
        {props.meaning.definition}
        <br />
        <em>
          {" "}
          <strong>Example:</strong>
          {props.meaning.example}
        </em>
        <br />
      </p>
    </div>
  );
}
