import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import BookPage from "../pages/BookPage";
import Error from "../pages/Error";
import BookDetail from "../pages/BookDetails/BookDetail";


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
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch('/booksData.json'),
        Component: BookDetail
        
      }
    ],
    errorElement: <Error></Error>
  },
]);
