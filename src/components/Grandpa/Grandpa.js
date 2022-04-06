import React, { useState } from 'react';
import "./Grandpa.css";
import User1 from "../User1/User1.js";
import User2 from "../User2/User2.js";
import User3 from "../User3/User3.js";
import User4 from "../User4/User4.js";

const Grandpa = () => {

    const [house, setHouse] = useState(1);

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }

    return (
        <div className='grandpa'>
            <h3>Grandpa playing GTA5</h3>
            <h4>House: {house}</h4>
            <button onClick={handleBuyAHouse} className='btn'>Buy a HOUSE</button>
            <div style={{ display: 'flex' }}>
                <User1 house={house}></User1>
                <User2 house={house}></User2>
                <User3 house={house}></User3>
                <User4 house={house}></User4>
            </div>

        </div>
    );
};

export default Grandpa;