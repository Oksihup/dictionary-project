import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div>
        <a href={props.phonetic.audio} target="_blank" rel="nooper noreferrer">
          Listen
        </a>
        <h2>{props.phonetic.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
