import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Css/index.css";
import Root from "./Routes/root.js";
import ErrorPage from "./Routes/errorRout.js";
import Contact from "./Component/contact";
import App from "./Component/App";
import Profils from "./Component/profil";
import { Red } from "./Component/red";
const router = createBrowserRouter([
  {
    path: "home",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "red",
    element: <Red/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,

  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profil",
    element: <Profils />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <RouterProvider router={router} />
    </>
);