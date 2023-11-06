import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

// import bg from "../../../public/Resources/cool-background.png";

// import axios from "axios";
import BorrowedBookCard from "./BorrowedBookCard";

const BooksBorrowed = () => {
  // const { user } = useContext(AuthContext);
  // console.log(user?.email);

  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // const url = `http://localhost:3000/buyers?email=${user?.email}`;
  // const url = `http://localhost:3000/buyers?email=man@manush.com`;

  useEffect(() => {
    fetch("http://localhost:5000/borrowedBooks")
      .then((res) => res.json())
      .then((data) => setBorrowedBooks(data));
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
  }, []);

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
          ></BorrowedBookCard>
        ))}
      </div>
    </>
  );
};

export default BooksBorrowed;
