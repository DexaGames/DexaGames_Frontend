import { useState } from "react";
import "./NumlockStyles.css";

export default function Numlock () {
    const [count, setCount] = useState();
    const [countTwo, setCountTwo] = useState();
    const [countThree, setCountThree] = useState();
    const [countFour, setCountFour] = useState();

    const handleReset = (e) => {
        console.log(e)
    }

    return (
        <div className="wrapper gameWrap">
            <div className="headIntro">
                <h1>Numlock</h1>
                <h3>Let's get playing</h3>
            </div>
           
                <div className="gameBoard">
                    {/* <div className="boxTop"><h3>{count}</h3></div>
                    <div className="boxTop"><h3>{countTwo}</h3></div>
                    <div className="boxTop"><h3>{countThree}</h3></div> */}
                    <input className="boxTop" type="" required placeholder="0"/>
                    <input className="boxTop" type="" required placeholder="0"/>
                    <input className="boxTop" type="" required placeholder="0"/>
                    <input className="boxTop" type="" required placeholder="0"/>
                </div>
                <div className="gameKeyboard"> 
                    <button onClick={e => setCount(1)} className="keyboard">
                        <h3>1</h3>
                    </button>
                    <button onClick={e => setCountTwo(2)} className="keyboard">
                        <h3>2</h3>
                    </button>
                    <button onClick={e => setCountThree(3)} className="keyboard">
                        <h3>3</h3> 
                    </button>
                    <button onClick={e => setCountFour(4)}className="keyboard">
                        <h3>4</h3>
                    </button>
                    <button className="keyboard">
                        <h3>5</h3>
                    </button>
                    <button className="keyboard">
                        <h3>6</h3>
                    </button>
                    <button className="keyboard">
                        <h3>7</h3>
                    </button>
                    <button className="keyboard">
                        <h3>8</h3>
                    </button>
                    <button className="keyboard">
                        <h3>9</h3>
                    </button>
                    <button onClick={handleReset} className="keyboard red">
                        <h3></h3>
                    </button>
                    <button className="keyboard">
                        <h3>0</h3>
                    </button>
                    <button className="keyboard">
                        <h3></h3>
                    </button>
                    <button className="spaceBar"><h3>clear</h3></button>
                </div>
                <div className="gameBoard">
                    {/* <div className="boxBottom"><h3></h3></div>
                    <div className="boxBottom"><h3></h3></div>
                    <div className="boxBottom"><h3></h3></div>
                    <div className="boxBottom"><h3></h3></div> */}
                    <input className="boxBottom" type="" required placeholder="0"/>
                    <input className="boxBottom" type="" required placeholder="0"/>
                    <input className="boxBottom" type="" required placeholder="0"/>
                    <input className="boxBottom" type="" required placeholder="0"/>
                </div>
            </div>
        
    )
}