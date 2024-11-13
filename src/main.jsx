import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/app";
import Cart from "./pages/cart";
import Details from "./pages/details";
import CheckOut from "./pages/checkOut";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/checkOut",
		element: <CheckOut />,
	},
	{
		path: "/details",
		element: <Details />,
	},
	{
		path: "/cart/details",
		element: <Details />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
