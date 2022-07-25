import { useState } from "react";
import "./projects.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
        icon: "https://i.imgur.com/TZGax3M.png",
        title: "Dannygram",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.imgur.com/TZGax3M.png",
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
                  <a href>Projects {d.website}</a>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
      />
    </div>
  );
}