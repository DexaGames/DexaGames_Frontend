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
                    <div className="boxTop"><h3>{count}</h3></div>
                    <div className="boxTop"><h3>{countTwo}</h3></div>
                    <div className="boxTop"><h3>{countThree}</h3></div>
                    <div className="boxTop"><h3>{countFour}</h3></div>
                </div>
                <div className="gameKeyboard"> 
                    <button onClick={e => setCount(1)} className="keyboard">
                        <h4>1</h4>
                    </button>
                    <button onClick={e => setCountTwo(2)} className="keyboard">
                        <h4>2</h4>
                    </button>
                    <button onClick={e => setCountThree(3)} className="keyboard">
                        <h4>3</h4> 
                    </button>
                    <button onClick={e => setCountFour(4)}className="keyboard">
                        <h4>4</h4>
                    </button>
                    <button className="keyboard">
                        <h4>5</h4>
                    </button>
                    <button className="keyboard">
                        <h4>6</h4>
                    </button>
                    <button className="keyboard">
                        <h4>7</h4>
                    </button>
                    <button className="keyboard">
                        <h4>8</h4>
                    </button>
                    <button className="keyboard">
                        <h4>9</h4>
                    </button>
                    <button onClick={handleReset} className="keyboard red">
                        <h4>x</h4>
                    </button>
                    <button className="keyboard">
                        <h4>0</h4>
                    </button>
                </div>
                <div className="gameBoard">
                    <div className="boxBottom"><h3></h3></div>
                    <div className="boxBottom"><h3></h3></div>
                    <div className="boxBottom"><h3></h3></div>
                    <div className="boxBottom"><h3></h3></div>
                </div>
            </div>
        
    )
}