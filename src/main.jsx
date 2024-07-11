import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Home.jsx";
// import Signup from "./Components/LoginSignup/Signup.jsx";
import Login from "./Components/LoginSignup/Login.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Cards from "./Components/Dashboard/Quiz/Cards.jsx";
import Quiz1 from "./Components/Dashboard/Quiz/Quiz1.jsx";
import Message from "./Components/Dashboard/Message.jsx";
import Results from "./Components/Dashboard/Results.jsx";
import Scoreboard from "./Components/Dashboard/Scoreboard.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/quiz1",
    element: <Quiz1 />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/scoreboard",
    element: <Scoreboard />,
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
