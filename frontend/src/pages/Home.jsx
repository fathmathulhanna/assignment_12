import { Link } from "react-router-dom";

function Home({ resume }) {
  return (
    <section className="home">
      <div className="home-content">
        <p className="small-text">{resume.greeting}</p>
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
        <p className="intro">{resume.intro}</p>

        <div className="buttons">
          <Link to="/about" className="btn">About Me</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
