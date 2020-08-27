import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoSource from "./components/PhotoSource"
import Description from "./components/Description"
import Container from "./components/Container"

function App() {
  return (
    <div className="App">
      <h1>
        NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </h1> 

      <PhotoSource />
    </div>
  );
}



export default App;
