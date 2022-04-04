import { useState } from "react";
import "./NumlockStyles.css";

export default function Numlock () {
    const [storeOne, setStoreOne] = useState(0);
    const [storeTwo, setStoreTwo] = useState(0);
    const [storeThree, setStoreThree] = useState(0);
    const [storeFour, setStoreFour] = useState(0);

    const handleOnclick = (noOne) => {
        noOne.target.value
    }

    return (
        <div className="wrapper gameWrap">
            <div className="headIntro">
                <h1>Numlock</h1>
                <h3>Let's get playing</h3>
            </div>
           
                <div className="gameBoard">
                    <div className="boxTop"><h3></h3></div>
                    <div className="boxTop"><h3></h3></div>
                    <div className="boxTop"><h3></h3></div>
                    <div className="boxTop"><h3></h3></div>
                </div>
                <div className="gameKeyboard">
                    <button onClick={() => handleOnclick(1)} className="keyboard">
                        <h4>1</h4>
                    </button>
                    <button className="keyboard">
                        <h4>2</h4>
                    </button>
                    <button className="keyboard">
                        <h4>3</h4>
                    </button>
                    <button className="keyboard">
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