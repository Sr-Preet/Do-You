import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import DoYou from './doYou';

import "./App.css";

const App = () => {
  const [name, setName] = useState('');
  const [clickedEnter, setClickedEnter] = useState(false);
  const contentProps = useSpring({
    opacity: !clickedEnter ? 1 : 0,
    marginTop: !clickedEnter ? 0 : -500
  });
  
  const submitted = () => {
    if(!name.length){
      alert('Enter Your Name First')
    } else {
      setClickedEnter(true)
    }
  }
  const main = (
    <a.div className="bg" style={contentProps}>
      <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Write Your Name..." />
      <button className="button" onClick={submitted}>Enter</button>
    </a.div>)
  return (
    <>
      {!clickedEnter ? main : <DoYou name={name} />}
    </>
  );
};

export default App;