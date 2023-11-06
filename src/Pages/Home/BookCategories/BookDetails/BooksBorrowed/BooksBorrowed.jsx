import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

// import bg from "../../../public/Resources/cool-background.png";

// import axios from "axios";
import BorrowedBookCard from "./BorrowedBookCard";

const BooksBorrowed = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/buyers?email=${user?.email}`;
  // const url = `http://localhost:3000/buyers?email=man@manush.com`;

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));

    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, [url]);

  return (
    <>
      <div className="flex flex-col gap-12 my-10 p-10">
        {bookings.map((booking) => (
          <BorrowedBookCard
            key={booking._id}
            booking={booking}
          ></BorrowedBookCard>
        ))}
      </div>
    </>
  );
};

export default BooksBorrowed;
