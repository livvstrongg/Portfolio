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
    {
      id: 2,
      name: "Mohammed Rahman",
      title: "Software Engineer | Fullstack Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/D4E35AQE1psQQZz3XNQ/profile-framedphoto-shrink_100_100/0/1652021706716?e=1661454000&v=beta&t=wbLWqdakYwCHqoi97hoU-k_toQIOmreBi3cWysCAPkE",
      icon: "assets/twitter.png",
      desc:
        "I had the pleasure of working on a social media app with Olivia and during that time, she displayed tremendous diligence and dedication. Olivia's biggest strength is her ability to deal with conflicting priorities in high-pressure situations. She consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed features and deployed our app on a strict deadline. Olivia had excellent time management skills and had a knack for keeping everyone calm and productive during intense crunch periods. What stood out to me the most was that Olivia was someone who really understood how to get the best out of people. For any company or team that needs a proven Software Engineer/Web Developer with a get-it-done-with-a-smile approach, I recommend Olivia.",
    },
  ];

  return (
    <div className="testimonials" id="references">
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