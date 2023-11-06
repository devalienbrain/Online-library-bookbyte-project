import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BooksByCategory from "../Pages/Home/BookCategories/BooksByCategory/BooksByCategory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
        loader: () => fetch("http://localhost:5000/allBooks"),
      },
      {
        path: "/allbooks/:name",
        element: <BooksByCategory></BooksByCategory>,
        loader: () => fetch("http://localhost:5000/allBooks"),
      },
    ],
  },
]);

export default routes;
