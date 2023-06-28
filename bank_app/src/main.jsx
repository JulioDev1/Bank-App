import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./global.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/index.jsx";
import { Register } from "./Pages/Register/index.jsx";
import { AccountPage } from "./Pages/AccountPage/index.jsx";
import { CreateCheckAccount } from "./Pages/CreateCheckAccount/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/accountPage",
        element: <AccountPage />,
      },
      {
        path: "/createCheckAccount",
        element: <CreateCheckAccount />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
