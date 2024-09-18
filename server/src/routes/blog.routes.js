const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

// get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Blogs fetched successfully", blogs });
  } catch (error) {
    console.error("Error fetching all blogs", error);
    res.status(500).send({ message: "Error fetching all blogs", error });
  }
});

// get a single blog by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).send({ message: "No blog found" });
    }
    res.status(200).send({ message: "Blog is fetched successfully", blog });
  } catch (error) {
    console.error("Error fetching a blog by id", error);
    res.status(500).send({ message: "Error fetching a blog by id", error });
  }
});

// post a new blog
router.post("/add-post", async (req, res) => {
  try {
    const newBlog = new Blog({ ...req.body });

    const blog = await newBlog.save();
    res.status(200).send({ message: "Blog posted successfully", blog });
  } catch (error) {
    console.error("Error posting a new blog", error);
    res.status(500).send({ message: "Error posting a new blog", error });
  }
});

// delete a blog
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).send({ message: "No blog found" });
    }

    res
      .status(200)
      .send({ message: "Blog deleted successfully", blog: deletedBlog });
  } catch (error) {
    console.error("Error deleting blog", error);
    res.status(500).send({ message: "Error deleting blog", error });
  }
});

// update a blog
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      return res.status(404).send({ message: "No blog found" });
    }
    res
      .status(200)
      .send({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog", error);
    res.status(500).send({ message: "Error updating blog", error });
  }
});

module.exports = router;
