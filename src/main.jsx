import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HTMLQuiz from "./HTMLQuiz.jsx";
import CSSQuiz from "./CSSQuiz.jsx";
import JSQuiz from "./JSQuiz.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/htmlquiz",
    element: <HTMLQuiz />,
  },
  {
    path: "/cssquiz",
    element: <CSSQuiz />,
  },
  {
    path: "/jsquiz",
    element: <JSQuiz />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
