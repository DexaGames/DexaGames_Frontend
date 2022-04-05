import { Textfit } from "react-textfit";
import "./NumlockStyles.css";

const ScreenDisplay = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={4}>
      {value}
    </Textfit>
  );
};

export default ScreenDisplay;