const express = require("express");
const Resume = require("../models/Resume");

const router = express.Router();

// GET /api/resume  -> returns the resume document
router.get("/", async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (!resume) {
      return res
        .status(404)
        .json({ message: "No resume found. Run: npm run seed" });
    }
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
