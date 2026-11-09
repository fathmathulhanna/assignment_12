import { Link } from "react-router-dom";

function About({ resume }) {
  return (
    <section className="about-page">
      <div className="about-container">
        <p className="small-text">GET TO KNOW ME</p>
        <h1>About Me</h1>

        {resume.aboutParagraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <h2>Education</h2>
        <div className="education">
          {resume.education.map((edu) => (
            <div className="education-box" key={edu._id}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <span>{edu.status}</span>
            </div>
          ))}
        </div>

        <h2>Skills</h2>
        <div className="skills">
          {resume.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        <div className="page-buttons">
          <Link to="/" className="btn">Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
