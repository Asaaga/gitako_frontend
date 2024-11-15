import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import AskQuestion from "./Askquestion";

const FSidebar = ({ isOpen, toggleSidebar, tags = [], onTagSelect }) => {
  const [user, setUser] = useState("");
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user.name);
    }
  }, []);

  const openModal = () => setModalOpen(true); // Open modal
  const closeModal = () => setModalOpen(false); // Close modal

  return (
    <>
      <div
        className={`fixed left-0 h-full w-[250px] bg-transparent border-r border-black z-20 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full p-4">
          <div className="mb-8 flex items-center justify-between">
            {/* Close button only for small screens */}
            <AiOutlineClose
              size={24}
              className="text-black cursor-pointer md:hidden"
              onClick={toggleSidebar}
            />
          </div>
          <ul className="space-y-6 lg:bg-inherit bg-gray-200 px-2">
            <li>
              <NavLink
                to="/"
                className="text-lg font-bold text-black hover:text-green-600"
                activeClassName="text-green-700"
              ></NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="text-lg font-bold text-black hover:text-green-600"
                activeClassName="text-green-700"
              >
                Welcome <br />
                <span className="ml-5">{user}</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="rounded-md px-2 text-red-900 bg-red-300"
              >
                Logout
              </button>
            </li>
            <li>
              <div className="flex flex-col h-full p-4">
                <h2 className="text-lg font-bold mb-4">Filter by Tags</h2>
                <select
                  onChange={(e) => onTagSelect(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">All</option>

                  {tags && Array.isArray(tags) && tags.length > 0 ? (
                    tags.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))
                  ) : (
                    <option disabled>No tags available</option>
                  )}
                </select>
              </div>
            </li>
            <li>
              <button
                onClick={openModal}
                className="text-lg font-bold text-black hover:text-green-600"
              >
                ask to learn?
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg lg:w-[50%] w-[90%] p-6 relative">
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>
            <AskQuestion />
          </div>
        </div>
      )}
    </>
  );
};

export default FSidebar;
