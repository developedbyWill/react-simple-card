import React from "react";
import "./App.css";
import SimpleCard from "./Components/SimpleCard";

function App() {
  return (
    <div className="App">
      <SimpleCard
        title="William Agbomadzi"
        description="Never in the field of human computation has so much abstract thinking been owed to so few lines of code."
        imageUrl="/Image/will.jpeg"
        time="2 hours ago"
        location="1 Hacker Way"
      />
    </div>
  );
}

export default App;
