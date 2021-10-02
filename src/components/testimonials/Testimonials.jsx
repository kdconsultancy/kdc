import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Dinesh Kumar Pandey",
      title: "Insurance Advisor",
      img:
        "assets/pandey.PNG",
      icon: "assets/twitter.png",
      desc:
        "I have to liaison between the insured and the insurer. I have a role in generating insurance business . Moreover, since I also represent our clients, I have a role to play towards us as well. ",
    },
    {
      id: 2,
      name: "Rohit Kumar Pandey",
      title: "Tax Consultant",
      img:
        "assets/rohit.png",
      icon: "assets/youtube.png",
      desc:
        "I help people and organizations in paying their taxes. I hold expertise in tax law, tax compliance, and tax planning. I help in making tax returns and work closely with their clients to minimize their tax liabilities throughout the year.",
      featured: true,
    },
    {
      id: 3,
      name: "Satyam Pandey",
      title: "Marketing Executive",
      img:
        "assets/satyam.jpg",
      icon: "assets/linkedin.png",
      desc:
        "I am involved in developing marketing campaigns to promote a service, product, event or campaign. The focus can be on selling a product, a service or raising awareness of an issue that affects the public.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
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
