import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  console.log(products, id);
  const navigate = useNavigate();
  const targetedProduct = products.find((product) => id === product._id);

  const { image, name, brand, type, price, ratings, description } =
    targetedProduct || {};

  const handleAddProductToCart = () => {
    const newCart = {
      image,
      name,
      brand,
      type,
      price,
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
    <div className="container mx-auto my-10 p-10 rounded">
      <div className="text-center">
        <h1 className="pb-10 text-4xl font-bold text-red-950">
          PRODUCT DETAILS
        </h1>
        <p>product id: {id}</p>
        <h1 className="text-3xl font-semibold p-3">{name}</h1>
        <h2 className="text-3xl font-bold">Price: {price} $</h2>
        <div className="p-5">
          <button
            onClick={handleAddProductToCart}
            className="px-7 py-3 border border-red-600 text-red-700 hover:text-white hover:bg-red-600 rounded-lg drop-shadow-2xl text-xl font-semibold"
          >
            Borrow The Book
          </button>
        </div>
        <div className="p-5">
          <Link>
            <button
              onClick={handleAddProductToCart}
              className="px-7 py-3 border border-red-600 text-red-700 hover:text-white hover:bg-red-600 rounded-lg drop-shadow-2xl text-xl font-semibold"
            >
              READ
            </button>
          </Link>
        </div>
      </div>
      <img
        className="w-full rounded-md"
        src={image}
        alt="Alternative Image border border-red-200"
      />
      <div className="bg-red-200 opacity-50 p-6 -mt-20 h-20">
        <button className="text-red-950 opacity-100 px-5 py-2 flex justify-center align-middle">
          <h1 className="opacity-100 font-black text-3xl">
            Rating: {ratings} / 5{" "}
          </h1>
        </button>
      </div>

      <h3 className="mt-10 text-3xl font-bold">{name}</h3>
      <p>Brand Name: {brand} </p>
      <p>Car Type: {type}</p>
      <p className="py-5">{description}</p>
    </div>
  );
};

export default BookDetails;
