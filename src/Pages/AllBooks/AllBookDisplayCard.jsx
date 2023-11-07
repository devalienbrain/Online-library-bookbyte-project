import { Link } from "react-router-dom";

const AllBookDisplayCard = ({ singleBook }) => {
  const { _id, image, name, author, category, ratings } = singleBook;
  return (
    <div className="card w-96 bg-base-100 border border-blue-100">

      <h2 className="card-title p-1 bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent">{name}</h2>
      <figure>
        <img src={image} alt="Book" />
      </figure>
      <div className="card-body text-center">
        <p>Author: <span className="font-bold">{author}</span> </p>
        <p className="font-bold bg-gradient-to-r from-pink-500 via-red-500 to-red-900 bg-clip-text text-transparent">{category}</p>
        <p>{ratings}</p>
        <div className="card-actions justify-center">
          <Link to={`/update/${_id}`}>
            <button className="py-3 px-7 text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-pink-500 via-red-500 to-red-900  hover:bg-gradient-to-tr">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBookDisplayCard;
