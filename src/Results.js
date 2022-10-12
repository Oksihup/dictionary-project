import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.definiton) {
    return (
      <div className="Results">
        <section>
          <h1>{props.definition.word}</h1>
          {props.definition.phonetics.map(function (phonetic, index) {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        </section>
        {props.definition.meaning.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
