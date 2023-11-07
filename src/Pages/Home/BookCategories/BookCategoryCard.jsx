import "aos/dist/aos.css";
import arrow from "../../../../public/Resources/arrow-forward.svg";
import { Link } from "react-router-dom";

const BookCategoryCard = ({ category }) => {
  // console.log(category);

  const { name, image } = category || {};

  return (
    <div className="rounded-lg flex flex-col justify-center items-center gap-3 hover:border drop-shadow-2xl p-5 hover:border-black hover:shadow-xl py-7">
      <img className="w-20" src={image} alt="Alternative Image" />
      <div className="p-4 text-center">
        <h3 className="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 via-red-500 to-red-900 bg-clip-text text-transparent">
          {name}
        </h3>
      </div>
      <Link to={`/allbooks/${name}`}>
        <div>
          <p>see all books</p>
          <img className="bg-red-600 mx-auto" src={arrow} />
        </div>
      </Link>
    </div>
  );
};

export default BookCategoryCard;
