import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  // console.log(books, id);
  const navigate = useNavigate();
  const targetedBook = books.find((book) => id === book._id);

  const { image, name, category, author, quantity, ratings, description } =
    targetedBook || {};

  const handleAddProductToCart = () => {
    const newCart = {
      image,
      name,
    };

    console.log(newCart);

    // send data to the server
    fetch(
      "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Product Added To Your Cart Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });

          navigate("/");
        }
      });
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
                onClick={handleAddProductToCart}
                className="px-4 py-1 border border-red-600 text-red-700  hover:text-red-600 rounded-lg drop-shadow-2xl text-sm font-semibold"
              >
                Borrow The Book
              </button>
              <button className="px-4 py-1 border bg-red-600 text-white hover:bg-red-700 rounded-lg drop-shadow-2xl text-sm font-semibold">
                READ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
