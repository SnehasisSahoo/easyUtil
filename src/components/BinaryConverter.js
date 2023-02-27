import React, { useState } from "react";
import NavBar from "./NavBar";

export default function BinaryConverter() {
    const handleChange = (event) => {
        let dec = parseInt(event.target.value, 10);
        if (isNaN(dec)) {
            event.target.value = null;
        }

        setNum(dec);

        if (isNaN(dec)) {
            setNum(0);
        }
        // console.log(typeof(num));
    };

    const handleBinClick = () => {
        // console.log("clicked");

        setBin(num.toString(2));
        // setBin(decToBin(num));
        // console.log(decToBin(num));
    };
    //convert to decimal function
    // function decToBin(n){
    //     let r=0;
    //     let ctr=0;
    //     while (n>0){
    //         r=r+((n%2)*(10**ctr));
    //         ctr=ctr+1;
    //         n=Math.floor(n/2);
    //     }
    //     return r
    // };

    const [num, setNum] = useState(0);
    const [bin, setBin] = useState(0);

    return (
        <>
            <NavBar tab="bin" />
            <div className="center-alng">
                <h2>DECIMAL TO BINARY CONVERTER</h2>
            </div>
            <div className="center-alng">
                <input
                    type="text"
                    inputMode="numeric"
                    className="input"
                    placeholder="enter decimal number only"
                    onChange={handleChange}
                />
            </div>
            <div className="center-alng">
                <button className="button" onClick={handleBinClick}>
                    <b>Convert to Binary</b>
                </button>
                <h3 id="results">Decimal: {num}</h3>
                <h3 id="results">Binary: {bin}</h3>
            </div>
        </>
    );
}
