import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";

// import axios from "axios";
import BorrowedBookCard from "./BorrowedBookCard";
import Swal from "sweetalert2";

const BooksBorrowed = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email);

  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://library-management-devalienbrain-crud-jwt-server.vercel.app/borrowedBooks?email=${user?.email}`
      // `http://localhost:5000/borrowedBooks?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
        // console.log(data);
      });
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
  }, [user?.email]);

  const handleReturnABook = (id, originalBookId) => {
    console.log(originalBookId);
    Swal.fire({
      title: "Want To Return The Book, Sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Return!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://library-management-devalienbrain-crud-jwt-server.vercel.app/borrowedBooks/${id}`,
          // `http://localhost:5000/borrowedBooks/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // console.log(originalBookId);
              if (!originalBookId) {
                return;
              }
              fetch(
                `https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks/${originalBookId}`
                // `http://localhost:5000/allBooks/${originalBookId}`
              )
                .then((res) => res.json())
                .then((data) => {
                  const recentQuantity = parseInt(data?.quantity);
                  const changedQuantity = recentQuantity + 1;
                  const newQuantity = { quantity: changedQuantity };

                  // Now send the PATCH request to update the quantity
                  fetch(
                    `https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks/${originalBookId}`,
                    // `http://localhost:5000/allBooks/${originalBookId}`,
                    {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(newQuantity),
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                    })
                    .catch((error) => {
                      console.error("Error updating book quantity:", error);
                    });
                })
                .catch((error) => {
                  console.error("Error fetching book quantity:", error);
                });

              Swal.fire({
                title: "Done!",
                text: "The Book Has Been Returned!",
                icon: "success",
                confirmButtonText: "Close",
              });
              const remaining = borrowedBooks.filter(
                (borrowedBook) => borrowedBook._id !== id
              );
              setBorrowedBooks(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <h2 className="text-3xl bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent text-center font-black py-7">
        Your Borrowed Book List (Total = {borrowedBooks.length})
      </h2>
      <div className="flex flex-col gap-12 my-10 p-10">
        {borrowedBooks.map((borrowedBook) => (
          <BorrowedBookCard
            key={borrowedBook._id}
            borrowedBook={borrowedBook}
            handleReturnABook={handleReturnABook}
          ></BorrowedBookCard>
        ))}
      </div>
    </>
  );
};

export default BooksBorrowed;
