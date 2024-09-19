import { createContext, useState } from "react";

export const BlogContext = createContext(); // create context for the blog search

export const BlogProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BlogContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </BlogContext.Provider>
  );
};
