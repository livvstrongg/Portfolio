import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  skills,
  ecommerceApp,
  recipeApp,
  socialMediaApp,
  gameApp,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "web",
      title: "Ecommerce App",
    },
    {
      id: "mobile",
      title: "Recipe App",
    },
    {
      id: "design",
      title: "Social Media App",
    },
    {
      id: "content",
      title: "Game App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "skills":
        setData(skills);
        break;
      case "web":
        setData(ecommerceApp);
        break;
      case "mobile":
        setData(recipeApp);
        break;
      case "design":
        setData(socialMediaApp);
        break;
      case "content":
        setData(gameApp);
        break;
      default:
        setData(skills);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <div className="buttons">
        {data.map((d) => (
          <button>{d.website}</button>
        ))}
      </div>
    </div>
  );
}