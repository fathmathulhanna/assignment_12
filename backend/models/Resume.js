const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  status: { type: String, required: true },
});

const resumeSchema = new mongoose.Schema({
  // Home page
  greeting: String,
  name: { type: String, required: true },
  title: String,
  intro: String,

  // About page
  aboutParagraphs: [String],
  education: [educationSchema],
  skills: [String],

  // Contact page
  contactIntro: String,
  contact: {
    email: String,
    phone: String,
    location: String,
  },
});

module.exports = mongoose.model("Resume", resumeSchema);
