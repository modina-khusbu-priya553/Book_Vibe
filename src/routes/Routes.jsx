import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import BookPage from "../pages/BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <BookPage></BookPage>
      }
    ]
  },
]);
