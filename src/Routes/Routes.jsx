import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BooksByCategory from "../Pages/Home/BookCategories/BooksByCategory/BooksByCategory";
import BookDetails from "../Pages/Home/BookCategories/BookDetails/BookDetails";
import UpdateProduct from "../Pages/AllBooks/UpdateTheBook/UpdateTheBook";
import BooksBorrowed from "../Pages/Home/BookCategories/BookDetails/BooksBorrowed/BooksBorrowed";
import PrivateRoute from "./PrivateRoute";
import ReadABook from "../Pages/Home/BookCategories/BookDetails/ReadABook/ReadABook";

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
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://library-management-devalienbrain-crud-jwt-server.vercel.app/booksCount"
            // "http://localhost:5000/booksCount"
          ),
      },
      {
        path: "/allbooks/:name",
        element: <BooksByCategory></BooksByCategory>,
        loader: () =>
          fetch(
            "https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks"
            // "http://localhost:5000/allBooks"
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks"
            // "http://localhost:5000/allBooks"
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks/${params.id}`
            // `http://localhost:5000/allBooks/${params.id}`
          ),
      },
      {
        path: "/borrowedbooks",
        element: (
          <PrivateRoute>
            <BooksBorrowed></BooksBorrowed>
          </PrivateRoute>
        ),
      },
      {
        path: "/readABook/:id",
        element: (
          <PrivateRoute>
            <ReadABook></ReadABook>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks"
            // "http://localhost:5000/allBooks"
          ),
      },
    ],
  },
]);

export default routes;
