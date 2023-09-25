import React, { useState } from 'react';
import Buttons from "./components/Buttons";
import Output from "./components/Output";
import './styles/App.css';

function App() {
  const [data, setData] = useState("");
  return (
    <div>
      <Output props={data}/>
      <Buttons data={data} setData={setData}/>
    </div>
  );
}

export default App;
