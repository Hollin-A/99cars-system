import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing layouts
import RootLayout from "./layouts/RootLayout";

// importing pages
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import Catalog from "./pages/Catalog";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/insights",
          element: <Insights />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
