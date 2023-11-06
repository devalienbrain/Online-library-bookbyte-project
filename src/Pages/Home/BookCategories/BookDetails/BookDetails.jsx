import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import React, { useContext, useState } from "react"; // Import React and useState
import { AuthContext } from "../../../../Provider/AuthProvider";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const books = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const targetedBook = books.find((book) => id === book._id);

  const { image, name, category, author, quantity, ratings, description } =
    targetedBook || {};

  // Handle the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // HANDLE BORROW BTN CLICKED
  const handleBorrowedBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const date = form.date.value;

    const liveDateToday = new Date();

    const bookBorrowInfo = {
      // service_id: _id,
      image,
      bookName: name,
      category,
      userName,
      userEmail,
      returnDate: date,
      borrowedDate: liveDateToday,
    };
    console.log(bookBorrowInfo);
    // Info send to db
    fetch("http://localhost:5000/borrowedBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookBorrowInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center align-middle">
      <div className="p-10 rounded">
        <div className="card lg:card-side bg-base-100 shadow-lg">
          <figure>
            <img src={image} alt="book" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">{author}</h2>
            <p>{description}</p>
            <h1>Quantity = {quantity} </h1>
            <h1>Rating: {ratings} / 5 </h1>
            <h2 className="card-title">{category}</h2>

            <div className="flex gap-1">
              <button
                onClick={openModal}
                className="px-4 py-1 border border-red-600 text-red-700  hover:text-red-600 rounded-lg drop-shadow-2xl text-sm font-semibold"
              >
                Borrow The Book
              </button>
              <button className="px-4 py-1 border border-red-500 bg-red-600 text-white hover:bg-red-700 rounded-lg drop-shadow-2xl text-sm font-semibold">
                READ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL PART */}
      {isModalOpen && (
        <div className="modal-container">
          <dialog
            id="To_Borrow_A_Book"
            className="modal modal-bottom sm:modal-middle"
            open
          >
            <div className="modal-box bg-green-300 shadow-lg text-white">
              <h3 className="font-black text-lg text-red-700">
                Please Fill Required Information First
              </h3>
              <form
                onSubmit={handleBorrowedBook}
                className="flex flex-col gap-4 px-5 py-9"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  defaultValue={user?.displayName}
                  className="input input-bordered text-blue-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered text-blue-600"
                  required
                  // readOnly
                />
                <label
                  htmlFor="date"
                  className="text-red-800 font-semibold text-sm"
                >
                  Select Book Return Date:
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered text-red-600"
                  required
                />
                <div className="form-control mt-6">
                  <button className="btn bg-green-800 hover:bg-green-700 text-white">
                    submit
                  </button>
                </div>
              </form>
              <div className="flex justify-center">
                <div className="modal-action">
                  <p
                    onClick={closeModal}
                    className="underline text-xs italic text-red-700 hover:text-red-600"
                  >
                    close modal
                  </p>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
