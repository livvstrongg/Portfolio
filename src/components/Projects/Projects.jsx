import { useState } from "react";
import "./projects.scss";

export default function Works() {
  const data = [
    {
      id: "1",
      icon: "https://i.imgur.com/M1OdU0M.png",
      title: "Olive Skin",
      desc:
        "An E-commerce App made using ReactJS and MongoDB.  ",
      img:
        "https://i.imgur.com/M1OdU0M.png",
    },
    {
      id: "2",
      icon: "https://i.imgur.com/ismQbJO.png",
      title: "Les Emotifs Anonymes",
      desc:
        "A recipe search app created using ReactJS and Edamam API.",
      img:
        "https://i.imgur.com/ismQbJO.png",
    },
    {
      id: "3",
      icon: "https://i.imgur.com/TZGax3M.png",
      title: "Dannygram",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.imgur.com/TZGax3M.png",
    },
    {
        id: "4",
        icon: "https://i.imgur.com/jbc9MLZ.png",
        title: "Game of War",
        desc:
          "Game of war card game created using Javascript, HTML, and CSS.",
        img:
          "https://i.imgur.com/jbc9MLZ.png",
      },
  ];
  
  return (
    <div className="works" id="works">
      <div>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <button>Projects{d.website}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}