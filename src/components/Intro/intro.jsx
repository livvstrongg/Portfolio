import "./intro.scss";
import { useEffect } from "react";

export default function Intro() {

  useEffect(() => {
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="imgContainer">
          <img src="https://i.imgur.com/bIYYFPB.jpg" alt="" />
        </div>
    </div>
  );
}