import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import UserInfo from "./routes/user-info";
import AddOns from "./routes/add-ons";
import Done from "./routes/done";
import Plan from "./routes/plan";
import Summary from "./routes/summary";
import { Provider } from "react-redux";
import { store } from "./store";
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
        path: "plan",
        element: <Plan />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "done",
        element: <Done />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
