import { useState } from "react";
import "./NumlockStyles.css";
import Wrapper from "./Wrapper";
import {ScreenDisplay, Screen} from "./ScreenDisplay";
import ButtonBox from "./ButtonWrap";
import Button from "./Buttons";

const btnValues = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["X", 0, "Reset"],
    ['Enter']
];

export default function Numlock () {

    let [display, setDisplay] = useState('');

    const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        
        if (value == 'X') {
            backspaceClickHandler()
            return
        }

        if (display.length < 4) {
         setDisplay(
                display + value
            );
        }
    };

    const resetClickHandler = () => {
        setDisplay(display = '');
    };

    const backspaceClickHandler = () => {
        const show = display.split('')
        show.length = show.length - 1
        setDisplay(show.join(''))
    }

    const getClassName = (btn) => {
        if (btn == "Enter") {
            return "Enter"
        }else if (btn == "Reset") {
            return "Reset"
        }else if (btn == "X"){
            return "clear"
        }
        else {return ""}
    }

    const handleEnter = (btn) => {
        if (btn === "Reset" ){
            return resetClickHandler 
        }if (btn === "Enter") {
            return 
        }else {return numClickHandler}

    }
    

    return (
        <div className="wrapper gameWrap">
            <div className="headIntro">
                <h1>Numlock</h1>
                <h3>Let's get playing</h3>
            </div>
            <Wrapper>
                    <ScreenDisplay value={display} />
                <ButtonBox>
                    {
                    btnValues.flat().map((btn, i) => {
                        return (
                        <Button
                            key={i}
                            className={getClassName (btn)}
                            value={btn}
                            onClick={handleEnter(btn)}
                        />
                        );
                    })
                    }
                </ButtonBox>
                <Screen value={display} />
            </Wrapper>
        </div>
    )
}