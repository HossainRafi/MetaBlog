const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

router.get("/", (req, res) => {
  res.send("from blog routes");
});

// post a new blog
router.post("/add-post", async (req, res) => {
  const newBlog = new Blog({ ...req.body });

  const blog = await newBlog.save();
  res.status(200).send({message:"Blog posted successfully",blog});
});

module.exports = router;
