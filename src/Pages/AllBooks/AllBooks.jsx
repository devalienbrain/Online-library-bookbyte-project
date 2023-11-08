import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBookDisplayCard from "./AllBookDisplayCard";

import arrow from "../../../public/Resources/arrow-forward.svg";
import axios from "axios";

const AllBooks = () => {
  const countBooks = useLoaderData();
  const { count } = countBooks;
  const totalItems = count;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // console.log(count, totalItems, itemsPerPage);
  const pages = [...Array(totalPages).keys()];
  // console.log(pages);

  const handleItemsPerPage = (e) => {
    console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
  };
  const [currentPage, setCurrenPage] = useState(0);
  // console.log(currentPage);

  const handleGoPrevPage = () => {
    if (currentPage > 0) {
      setCurrenPage(currentPage - 1);
    }
  };
  const handleGoNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrenPage(currentPage + 1);
    }
  };
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        // `https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks?page=${currentPage}&size=${itemsPerPage}`
        `http://localhost:5000/allBooks?page=${currentPage}&size=${itemsPerPage}`,
        { withCredentials: true }
      )
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      });
  }, [currentPage, itemsPerPage]);

  // fetch(
  //   // `https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks?page=${currentPage}&size=${itemsPerPage}`
  //   `http://localhost:5000/allBooks?page=${currentPage}&size=${itemsPerPage}`
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setBooks(data);
  //     // console.log(books);
  //   });
  // }, [currentPage, itemsPerPage]);

  const handleFilterAvailableBooks = () => {};

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <div>
          <div className="text-3xl bg-gradient-to-r from-pink-500 via-red-500 to-red-900 bg-clip-text text-transparent text-center font-black uppercase">
            Total Books: {totalItems}
          </div>
          <div
            onClick={handleFilterAvailableBooks}
            className="py-5 flex justify-center items-center"
          >
            <div className="flex gap-1 justify-center items-center py-2 px-5 bg-black text-slate-100 hover:text-white rounded-2xl shadow-xl">
              <span className="text-xs">filter available books </span>
              <img className="w-4" src={arrow} />{" "}
            </div>
          </div>
          <div className="p-5 my-5 border rounded-xl  font-semibold text-xs">
            <label htmlFor="itemsPerPage">Showing Books Per Page = </label>
            <select
              name="itemsPerPage"
              id="itemsPerPage"
              onChange={handleItemsPerPage}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          {/* LOAD AND SHOW BOOKS SECTION STARTS */}
          <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((singleBook) => (
                <AllBookDisplayCard
                  key={singleBook._id}
                  singleBook={singleBook}
                ></AllBookDisplayCard>
              ))}
            </div>
          </div>
          {/* LOAD AND SHOW BOOKS SECTION ENDS  */}
          <div className="flex justify-center gap-3 py-10">
            <button onClick={handleGoPrevPage}>Prev</button>
            {pages.map((page) => {
              // console.log(page);
              return (
                <button
                  className={currentPage === page ? "text-red-600" : ""}
                  onClick={() => setCurrenPage(page)}
                  key={page}
                >
                  {page}
                </button>
              );
            })}
            <button onClick={handleGoNextPage}>Next</button>
            {/* <p>Current: {currentPage}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
