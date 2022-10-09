import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function handleResponse(response) {
  console.log(response.data[0]);
}

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    //dictionary documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input className="search" onChange={handleKeywordChange}></input>
      </form>
      "Hello from Dictionary!"
    </div>
  );
}
