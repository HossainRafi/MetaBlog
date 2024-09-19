import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle blog data upload
  const onSubmit = async (data) => {
    const blogData = {
      title: data.title,
      description: data.description,
      image: data.image,
      author: {
        name: data.authorName,
        image: data.authorImage,
      },
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/blogs/add-post`,
        blogData
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Blog posted successfully !!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    } catch (error) {
      console.log("Error posting a new blog", error);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Add A New Blog</h2>

      {/* form */}
      <div className="mt-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-3xl mx-auto p-6 rounded-lg shadow-md space-y-8"
        >
          <InputField
            label="Blog Title:"
            id="title"
            type="text"
            register={register("title", { required: true })}
            placeholder="Blog Title"
          />

          {/* text-area */}
          <TextAreaField
            label="Blog Description:"
            id="description"
            type="text"
            register={register("description", { required: true })}
            placeholder="Blog Description"
          />

          <InputField
            label="Author Name"
            id="authorName"
            type="text"
            placeholder="Author Name:"
            register={register("authorName", { required: true })}
          />
          <InputField
            label="Author Image URL:"
            id="authorImage"
            type="url"
            register={register("authorImage", { required: true })}
            placeholder="Author Image URL"
          />
          <InputField
            label="Thumbnail Image URL:"
            id="image"
            type="url"
            register={register("image", { required: true })}
            placeholder="Thumbnail Image URL"
          />

          <div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
