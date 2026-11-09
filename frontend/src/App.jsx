import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const API_URL = "http://localhost:5000/api/resume";

function App() {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setResume(res.data))
      .catch(() => setError("Could not load resume data. Is the backend running?"));
  }, []);

  if (error) return <p style={{ padding: "40px" }}>{error}</p>;
  if (!resume) return <p style={{ padding: "40px" }}>Loading...</p>;

  return (
    <Routes>
      <Route path="/" element={<Home resume={resume} />} />
      <Route path="/about" element={<About resume={resume} />} />
      <Route path="/contact" element={<Contact resume={resume} />} />
    </Routes>
  );
}

export default App;
