import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import UserInfo from "./routes/user-info";
import AddOns from "./routes/add-ons";
import Confirmation from "./routes/confirmation";
import Plan from "./routes/plan";
import Summary from "./routes/summary";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "user-info",
        element: <UserInfo />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
