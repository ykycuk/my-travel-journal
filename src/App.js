import React from "react";
import Navbar from "./components/Navbar";
import Place from "./components/Place";
// import data from "./data.js";

export default function App() {
  
  // const dataPlace = data.map(object => 
  //   <Place 
  //     object={object}
  //   />)

  return (
    <div>
      <Navbar />
      <Place />
      {/* {dataPlace} */}
    </div>
  );
}