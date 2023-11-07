import { Link } from "react-router-dom";

const BookOnCategoryCard = ({ filteredBookOnCategory }) => {
  const { _id, image, name, author, category, ratings } =
    filteredBookOnCategory;

  return (
    <div className="card w-96 bg-base-100 border border-lime-100">
      <h2 className="card-title p-1 bg-gradient-to-r from-pink-500 via-red-500 to-red-900 bg-clip-text text-transparent">{name}</h2>
      <figure>
        <img src={image} alt="Book" />
      </figure>
      <div className="card-body text-left">
        <p>Author: <span className="font-bold">{author}</span> </p>
        <p className="font-bold bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent">{category}</p>
        <p>{ratings}</p>
        <div className="card-actions justify-start">
          <Link to={`/details/${_id}`}>
            <button className="py-3 px-7 text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-blue-500 to-red-900  hover:bg-gradient-to-tr">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookOnCategoryCard;
