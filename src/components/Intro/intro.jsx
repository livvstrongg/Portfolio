import "./intro.scss";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

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