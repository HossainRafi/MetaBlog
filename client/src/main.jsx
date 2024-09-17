import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AddBlog from "./pages/blogs/addBlog/AddBlog";
import ManageBlogs from "./pages/blogs/manageBlog/ManageBlogs";
import UpdateBlog from "./pages/blogs/manageBlog/UpdateBlog";
import BlogDetails from './pages/blogs/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/add-blog", element: <AddBlog /> },
      { path: "/manage-blog", element: <ManageBlogs /> },
      { path: "/blogs/edit/:id", element: <UpdateBlog /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
