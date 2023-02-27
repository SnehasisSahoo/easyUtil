import React, { useState } from "react";
import NavBar from "./NavBar";


export default function TempConverter() {
//   const cInp = (temp) => {
//     if (isNaN(parseInt(temp.target.value))) {
//       temp.target.value = null;
//     }
//     setTempc(temp.target.value);
//     setButc(true);
//     setButf(false);
//     // temp.target.value = tempc;
//   };
  const cInp = (temp) => {
    if (isNaN(parseInt(temp.target.value))) {
      temp.target.value = null;
    }
    setTempc(temp.target.value);
    setTempf((temp.target.value * 9) / 5 + 32);
    // temp.target.value = tempc;
  };

//   const fInp = (temp) => {
//     if (isNaN(parseInt(temp.target.value))) {
//       temp.target.value = null;
//     }
//     setTempf(temp.target.value);
//     setButf(true);
//     setButc(false);
//     // temp.target.value = tempf;
//   };
  const fInp = (temp) => {
    if (isNaN(parseInt(temp.target.value))) {
      temp.target.value = null;
    }
    console.log(temp.target.value)
    setTempf(temp.target.value);
    setTempc(((temp.target.value - 32) * 5) / 9);
    // temp.target.value = tempf;
  };

  // const conv = ()=>{
  //     setTempf((tempcin*9/5)+32);
  //     setTempc((tempfin-32)*5/9);
  //     console.log(tempc);
  //     console.log(tempf);
  //     console.log(cInp.value);

//   const convToC = () => {
//     setTempc(((tempf - 32) * 5) / 9);
//   };

//   const convToF = () => {
//     setTempf((tempc * 9) / 5 + 32);
//   };

  // };

  //(0°C × 9/5) + 32 = 32°F
  //(0°F − 32) × 5/9 = -17.78°C

  const [tempc, setTempc] = useState('');
  const [tempf, setTempf] = useState('');

//   const [butc, setButc] = useState(false);
//   const [butf, setButf] = useState(false);
  // const [tempcin, setTempcin] = useState(0);
  // const [tempfin, setTempfin] = useState(32);

  return (
    <>
      <NavBar tab="temp"/>
      <div className="center-alng">
        <h2>TEMPERATURE CONVERSION</h2>

        <form className="tempForm">
          <div>
            <input
              className="input"
              type="text"
              inputMode="numeric"
              name="tempc"
              value={tempc}
              id="tempc"
              onChange={cInp}
              placeholder="temperature in degree centigrate"
            />
            <span>
              <b>
                <label htmlFor="tempc"> &#176; C</label>
              </b>
            </span>
          </div>
        </form>
        {/* <div>
          <button className="buttont" onClick={convToF} disabled={butf}>
            <b> CONVERT to °F &darr; </b>
          </button>
          <button className="buttont" onClick={convToC} disabled={butc}>
            <b> CONVERT to °C &uarr; </b>
          </button>
        </div> */}
        <form className="tempForm">
          <div>
            <input
              className="input"
              type="text"
              name="tempf"
              value={tempf}
              id="tempf"
              onChange={fInp}
              placeholder="temperature in degree centigrate"
            />
            <span>
              <b>
                <label htmlFor="tempf"> &#176; F</label>
              </b>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
