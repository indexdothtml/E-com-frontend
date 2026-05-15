import { createBrowserRouter } from "react-router";

import App from "./App";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
