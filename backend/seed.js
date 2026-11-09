require("dotenv").config();
const mongoose = require("mongoose");
const Resume = require("./models/Resume");

const data = {
  greeting: "HELLO, I'M",
  name: "Fathimathul Hanna P",
  title: "Software Development Student",
  intro:
    "I am a software development student who enjoys creating websites and learning new technologies.",

  aboutParagraphs: [
    "Hello! I am Fathimathul Hanna P, a software development student with an interest in web development and programming.",
    "I completed my Bachelor of Vocation in Software Development from Farook College, Kozhikode. Currently, I am pursuing my Master of Vocation in Software Development at Cochin University of Science and Technology (CUSAT).",
    "I enjoy learning new technologies and developing simple and useful applications. I am particularly interested in web development and software development.",
  ],

  education: [
    {
      degree: "M.Voc in Software Development",
      institution: "Cochin University of Science and Technology (CUSAT), Kochi",
      status: "Currently Pursuing",
    },
    {
      degree: "B.Voc in Software Development",
      institution: "Farook College (Autonomous), Kozhikode",
      status: "Completed",
    },
  ],

  skills: ["HTML", "CSS", "JavaScript", "Java", "PHP", "MySQL"],

  contactIntro:
    "If you would like to get in touch with me, feel free to send me a message.",
  contact: {
    email: "fathimathulhannap77@gmail.com",
    phone: "+91 77367 12877",
    location: "Kozhikode, India",
  },
};

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Resume.deleteMany({});
    await Resume.create(data);
    console.log("Resume data seeded successfully");
  } catch (err) {
    console.error("Seeding failed:", err.message);
  } finally {
    await mongoose.disconnect();
  }
})();
