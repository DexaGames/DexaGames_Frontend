import { Textfit } from "react-textfit";
import "./NumlockStyles.css";

export const ScreenDisplay = ({ value }) => {
    const show = value.toString().split("")
    
  return (
    <div className="screenWrap">
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 0 ? show[0] : ""}
            
        </Textfit>
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 1 ? show[1] : ""}
        </Textfit>
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 2 ? show[2] : ""}
        </Textfit>
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 3 ? show[3] : ""}
        </Textfit>
    </div>
  );
};


export const Screen = ({ value }) => {
    const show = value.toString().split("")
    
  return (
    <div className="screenWrap">
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 0 ? show[0] : ""}
            
        </Textfit>
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 1 ? show[1] : ""}
        </Textfit>
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 2 ? show[2] : ""}
        </Textfit>
        <Textfit className="screen" mode="single" max={24}>
            {show.length > 3 ? show[3] : ""}
        </Textfit>
    </div>
  );
};

