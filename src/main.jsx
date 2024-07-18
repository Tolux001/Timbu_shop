import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/app";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/blog",
    element: <Details />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		
		<RouterProvider router={router} />
	</React.StrictMode>
);
