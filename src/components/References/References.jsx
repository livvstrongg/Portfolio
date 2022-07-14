import "./references.scss";

export default function References() {
  const data = [
    {
      id: 1,
      name: "Jacob Barton",
      title: "Web Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFppUn3tkAg2Q/profile-displayphoto-shrink_100_100/0/1601320919482?e=1663200000&v=beta&t=RodP_wM9z49yIlAfSzXzA2hm4o3M-mR1h4DlH7Jq1wU",
      icon: "assets/twitter.png",
      desc:
        "During our time at General Assembly, Olivia repeatedly demonstrated her ability to problem solve effectively, take on new challenges and be resourceful. Perhaps even more importantly though, Olivia stands out from the crowd for her high level of emotional intelligence. Humble, empathetic, and community-oriented, Olivia is the kind of person that builds up the whole team.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>References</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}