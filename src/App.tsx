import React, { useState } from "react";
import Table from "./components/Table/Table";
import "./index.css";
import './fonts.css'
import Search from "./components/Search/Search";

function App() {

  


  return (
    <div className="App">
      <Search/>
      <Table/>
    </div>
  );
}

export default App;
