import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, tags } = e.target;
    const question = {
      question: title.value,
      description: description.value,
      tags: tags.value.split(","),
      userId: user._id,
    };

    try {
      // Send question to backend
      const res = await axios.post(
        "http://localhost:8080/ask-question",
        question
      );

      if (res.status === 201) {
        toast.success("Question added successfully", { duration: 2000 });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to add question", { duration: 2000 });
    }
  };

  return (
    <div className="h-full w-full">
      <Toaster />
      <div className="md:mx-12 flex flex-col items-center gap-4 mb-12 border p-4 pb-6 rounded-md bg-green-300 dark:bg-[#1E212A] mt-12">
        <h1 className="text-2xl font-bold text-center text-green-600">
          Ask your Question
        </h1>

        <form onSubmit={handleSubmit} className="form w-full">
          <div className="title">
            <label className="text-gray-800 text-start dark:text-white">
              Question Title
            </label>
            <input
              name="title"
              className="mt-2 w-full h-10 px-3 rounded outline-none border-none shadow-sm"
              type="text"
              required
            />
          </div>
          <div className="desc mt-3">
            <label className="text-gray-800 text-start dark:text-white">
              Question Description
            </label>
            <textarea
              name="description"
              className="mt-2 w-full h-24 px-3 py-2 rounded outline-none border-none shadow-sm"
              type="text"
              required
            />
          </div>
          <div className="tags mt-3">
            <label className="text-gray-800 text-start dark:text-white">
              Related Tags
            </label>
            <input
              name="tags"
              placeholder="Enter tags separated by comma"
              className="mt-2 w-full h-10 px-3 rounded outline-none border-none shadow-sm"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="mt-8 w-full mx-auto text-center flex items-center gap-2 bg-green-700 rounded-md shadow-sm px-8 py-2 cursor-pointer"
          >
            <span className="text-white mx-auto">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
