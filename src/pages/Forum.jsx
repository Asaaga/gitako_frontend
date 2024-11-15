import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FSidebar from "../components/FSidebar";
import Loading from "../components/Loading";
import NothingHere from "../components/NothingHere";
import UserInfo from "../components/UserInfo";
import Arrowdown from "../icons/Arrowdown";
import Arrowup from "../icons/Arrowup";
import Send from "../icons/Send";
import Write from "../icons/Write";
import newRequests from "../utils/newRequest";

const Forum = () => {
  const { topic } = useParams();
  const [openId, setOpenId] = useState([]);
  const [answer, setAnswer] = useState("");
  const [selectedTag, setSelectedTag] = useState(""); // Track selected tag for filtering
  const [tags, setTags] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { isLoading, data = [] } = useQuery("getAllQuestions", () => {
    if (topic) {
      return newRequests
        .get(`http://localhost:8080/find/${topic}`)
        .then((res) => res.data);
    } else {
      return newRequests
        .get(`http://localhost:8080/questions`)
        .then((res) => res.data);
    }
  });

  useEffect(() => {
    if (data.length) {
      // Extract unique tags from questions
      const allTags = data.flatMap((q) => q.tags || []);
      setTags(Array.from(new Set(allTags))); // Set the tags
    }
  }, [data]);

  useEffect(() => {
    if (selectedTag) {
      setFilteredQuestions(data.filter((q) => q.tags?.includes(selectedTag)));
    } else {
      setFilteredQuestions(data); // Reset to all questions when no tag is selected
    }
  }, [data, selectedTag]);

  if (isLoading) return <Loading />;

  return (
    <div className="">
      {/* Sidebar */}
      <FSidebar
        tags={tags}
        onTagSelect={setSelectedTag}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-30 bg-green-500 text-white p-2 rounded-full shadow-md"
        >
          <AiOutlineMenu size={24} />
        </button>
        <Toaster />
        <div className="w-full flex flex-col items-center gap-y-5 md:gap-8 my-8">
          {filteredQuestions.length > 0 &&
            filteredQuestions.map((question, index) => {
              return (
                <div
                  key={index}
                  className="w-[96%] md:w-[80%] mx-5 flex flex-col items-end p-3 md:p-4 rounded-md bg-green-100 dark:bg-slate-400"
                >
                  <div className="w-full bg-white dark:bg-[#1E212A] p-4 md:p-5 rounded-lg shadow-md flex items-start gap-5">
                    <div className="left-section space-y-1 text-center">
                      <Arrowup id={question._id} />
                      <h3 className="text-sm md:text-base">
                        {question?.upvote?.length || 0}
                      </h3>
                      <Arrowdown id={question._id} />
                    </div>
                    <div className="right-section w-full">
                      <h1 className="text-base md:text-lg dark:text-white">
                        {question?.question}
                      </h1>
                      <p className="text-sm md:text-base">
                        {question?.description}
                      </p>
                      <hr />
                      <UserInfo
                        openId={openId}
                        index={index + 1}
                        setOpenId={setOpenId}
                        question={question}
                      />
                    </div>
                  </div>
                  {openId.find((ele) => ele === index + 1) && (
                    <>
                      {question?.replies?.map((answer, index) => {
                        return (
                          <div
                            key={answer._id}
                            className="flex items-center gap-4"
                          >
                            <img
                              className="h-4 md:h-6 w-4 md:w-6"
                              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/nested_arrows_icon_155086.png"
                              alt=""
                            />
                            <div className="bg-white dark:bg-[#32353F] dark:text-white max-w-xl p-5 rounded-lg shadow-md flex flex-col items-start gap-5 mt-2">
                              <p className="text-inherit">{answer?.reply}</p>
                              <UserInfo answer={answer} />
                            </div>
                          </div>
                        );
                      })}
                      <div className="w-full bg-white dark:bg-slate-900 flex items-center gap-4 px-5 py-2 rounded-lg shadow-md mt-2">
                        <Write />
                        <input
                          onChange={(e) => setAnswer(e.target.value)}
                          className="w-full h-10 border-none outline-none rounded-md py-1 px-2"
                          type="text"
                          value={answer}
                          placeholder="Write a comment"
                        />
                        <Send
                          questionId={question._id}
                          answer={answer}
                          setAnswer={setAnswer}
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          {filteredQuestions.length === 0 && <NothingHere />}
        </div>
      </div>
    </div>
  );
};

export default Forum;
