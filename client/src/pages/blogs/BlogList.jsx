import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [searchTerm] = useState("css"); //TODO: wil use blog context
  const [blogs, setBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(6);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // filter blogs based on title, description and author name
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle view more blog
  const handleMoreBlog = () => {
    setShowBlogs((prev) => prev + 3);
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      {/* load more blogs button */}
    </div>
  );
};

export default BlogList;
