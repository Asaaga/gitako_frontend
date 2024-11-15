import Content from "./components/Content";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { io } from "socket.io-client";
import Askquestion from "./components/Askquestion";
import Footer from "./components/Footer";
import Notfound from "./components/Notfound";
import Navbar from "./components/Website/Navbar";
import { addUsers } from "./context/onlineSlice";
import AboutUs from "./pages/AboutUs";
import Chat from "./pages/Chat";
import ContactUs from "./pages/ContactUs";
import Explore from "./pages/Explore";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Myanswers from "./pages/Myanswers";
import Register from "./pages/Register";
const queryClient = new QueryClient();

export const socket = io(`http://localhost:8080`, {
  withCredentials: true,
  secure: true,
});

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const Layout = () => {
  const [, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    socket.connect();
    socket.on("connect", () => {
      console.log("socket connected");
    });
    socket.auth = user;

    socket.on("user-connected", (users) => {
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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

const router = createBrowserRouter([
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
        path: "/contact-us",
        element: <ContactUs />,
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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
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
        path: "/forum",
        element: (
          <ProtectedRoute>
            <Myanswers />
          </ProtectedRoute>
        ),
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
