import React, { useState } from "react";
import NavBar from "./NavBar";

export default function MathOperations() {
  //function for factorial
  function fact(num) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      console.log(num);
      return num * fact(num - 1);
    }
  }

  const inVal = (e) => {
    setInp(e.target.value);
  };
  const eq = () => {
    if (opp === "fact") {
      let i = inp;
      setRslt(fact(i));
    } else if (opp === "sq") {
      let i = inp;
      setRslt(i ** 2);
    } else if (opp === "sqrt") {
      let i = inp;
      setRslt(Math.sqrt(i));
    } else if (opp === "cb") {
      let i = inp;
      setRslt(i ** 3);
    } else if (opp === "cbrt") {
      let i = inp;
      setRslt(Math.cbrt(i));
    } else {
      setInp("err");
    }
    // console.log(opp)
    // console.log(rslt)
  };
  const slct = (event) => {
    setOpp(event.target.value);
  };

  const [opp, setOpp] = useState('fact');
  const [inp, setInp] = useState(null);
  const [rslt, setRslt] = useState(null);

  return (
    <>
      <NavBar tab="math"/>
      <div className="center-alng">
        <h2>MATH OPERATIONS</h2>
        <form onSubmit={(e)=>{e.preventDefault(); return false}}>
          <label htmlFor="opp">
            <b>Choose Operation: </b>
          </label>
          <select name="opp" id="opp" className="selector" onChange={slct}>
            <option value="fact">Factorial</option>
            <option value="sq">Square</option>
            <option value="sqrt">Square Root</option>
            <option value="cb">Cube</option>
            <option value="cbrt">Cube Root</option>
          </select>
          <div>
            <input type="number" className="input" onChange={inVal} />
          </div>
        </form>
      </div>
      <div className="flx">
        <button className="buttont" onClick={eq}>
          <b> RESULT </b>
        </button>
        <span className="resultx">
          <h3 id="results"> = {rslt}</h3>
        </span>
      </div>
    </>
  );
}
