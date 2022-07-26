// import "./intro.scss";
// import { useEffect } from "react";

// export default function Intro() {

//   useEffect(() => {
//   }, []);

//   return (
//     <div className="intro">
//           <img src="https://i.imgur.com/bIYYFPB.jpg" alt="" />
//     </div>
//   );
// }
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Intro() {
  return (
    <div>
      <Carousel interval={3000} showThumbs={false}>
                <div>
                    <img src="https://i.imgur.com/9QRUsFc.jpg"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/CJHuoIA.jpg" alt=""/>
                </div>
            </Carousel>
    </div>
  )
}

export default Intro 