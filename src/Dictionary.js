import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Images from "./Images";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("book");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [image, setImage] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImages(response) {
    setImage(response.data.photos);
  }

  function search() {
    let key = "6b72d3t9e0a187fb46324o57dba90ad0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);

    let imgApiKey = "6b72d3t9e0a187fb46324o57dba90ad0";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImages);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form align="center" onSubmit={search}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={results} />
        <Images image={image} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
