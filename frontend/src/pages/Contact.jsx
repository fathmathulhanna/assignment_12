import { Link } from "react-router-dom";

function Contact({ resume }) {
  // Turn the contact object into a list so it can be displayed with .map()
  const details = [
    { label: "Email", value: resume.contact.email },
    { label: "Phone", value: resume.contact.phone },
    { label: "Location", value: resume.contact.location },
  ];

  return (
    <section className="contact-page">
      <div className="contact-container">
        <p className="small-text">GET IN TOUCH</p>
        <h1>Contact Me</h1>
        <p className="contact-intro">{resume.contactIntro}</p>

        <div className="contact-details">
          {details.map((item) => (
            <div key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="page-buttons">
          <Link to="/" className="btn">Home</Link>
          <Link to="/about" className="btn btn-outline">About Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
