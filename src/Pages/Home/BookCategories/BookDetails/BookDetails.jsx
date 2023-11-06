import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import React, { useState } from "react"; // Import React and useState

const BookDetails = () => {
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-container">
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            open
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <button onClick={closeModal} className="btn">
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
