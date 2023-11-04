import "aos/dist/aos.css";
import arrow from "../../../../public/Resources/arrow-forward.svg";

const BookCategoryCard = ({ category }) => {
  console.log(category);

  const { name, image } = category || {};

  return (
    <div className="rounded-lg flex flex-col justify-center items-center gap-3 border border-white drop-shadow-2xl p-5 hover:border-black hover:shadow-xl py-7">
      <img className="w-20" src={image} alt="Alternative Image" />
      <div className="p-4 text-center">
        <h3 className="text-2xl text-center font-bold">{name}</h3>
      </div>
      <div>
        <p>see all books </p>
        <img className="bg-red-600 mx-auto" src={arrow} />
      </div>
    </div>
  );
};

export default BookCategoryCard;
