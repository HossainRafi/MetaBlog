import { useEffect, useState } from "react";


const BlogList = () => {
const [blogs, setBlogs] =useState([])

useEffect(()=>{
  fetch("blogs.json")
   .then((response) => response.json())
   .then((data) => setBlogs(data))
   .catch((error) => console.error("Error:", error));
},[])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index}>
            <h1>{blog.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList