import Content from "./components/Content";
// import Navbar from "./components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";
import Askquestion from "./components/Askquestion";
import Notfound from "./components/Notfound";
import { addUsers } from "./context/onlineSlice";
import Chat from "./pages/Chat";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Myanswers from "./pages/Myanswers";
import Register from "./pages/Register";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Website/Navbar";
import Footer from "./components/Footer";
const queryClient = new QueryClient();

export const socket = io(`http://localhost:8080`, {
  withCredentials: true,
  secure: true,
});

const Layout = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // if (!user) {
    //   window.location.href = "/login";
    // }

    socket.connect();
    socket.on("connect", () => {
      console.log("socket connected");
    });
    socket.auth = user;

    socket.on("user-connected", (users) => {
      console.log("users", users);

      dispatch(addUsers(users));
    });

    socket.on("user-disconnected", (users) => {
      dispatch(addUsers(users));
    });

    const getUsers = async () => {
      const res = await axios.get(`http://localhost:8080/allusers`);
      setUsers(res.data);
    };
    getUsers();
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Navbar />
      <Outlet />
      <Footer />
    </QueryClientProvider>
    // <QueryClientProvider client={queryClient} contextSharing={true}>
    //   {/* <div
    //     className="relative w-screen flex flex-col justify-center items-center
    //   overflow-x-hidden bg-white dark:bg-[#32353F]"
    //   >
    //     <Navbar />
    //     <div
    //       className="w-full h-screen flex justify-center items-start px-4
    //     md:px-12 pt-12 dark:bg-[#32353F]"
    //     >
    //       <Sidebar />
    //       <Outlet />
    //       <div
    //         className="right-section
    //       hidden md:block
    //       h-80 fixed z-10 top-24 right-28"
    //       >
    //         <CreateButton />
    //         <div
    //           className="mt-8  py-4 px-3 rounded-md flex
    //      flex-col items-start gap-5"
    //         >
    //           <h2 className="text-gray-600 font-bold text-start">Top Users</h2>
    //           {users.length > 0 &&
    //             users.slice(0, 5).map((user, index) => {
    //               console.log("user", user);
    //               return (
    //                 <div
    //                   key={index}
    //                   className="flex items-center cursor-pointer"
    //                 >
    //                   <img
    //                     src={user?.profileImage}
    //                     alt="profile"
    //                     className="w-6 h-6 rounded-full mr-2"
    //                   />
    //                   <h3 className="text-xs">{user.name}</h3>
    //                 </div>
    //               );
    //             })}
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   <HomePage />
    // </QueryClientProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/discuss",
        element: <Content />,
      },
      {
        path: "/ask",
        element: <Askquestion />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/explore/:topic",
        element: <Content />,
      },
      {
        path: "/myqna",
        element: <Myanswers />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default function App() {
  const theme = useSelector((state) => state.theme.isDark);

  return (
    <div className={`h-screen ${theme ? "dark" : ""}`}>
      <RouterProvider router={router} />
    </div>
  );
}
