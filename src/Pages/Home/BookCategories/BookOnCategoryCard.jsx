const BookOnCategoryCard = ({ filteredBookOnCategory }) => {
  const { image, name, author, category, ratings } = filteredBookOnCategory;

  return (
    <div className="card w-96 bg-base-100">
      <figure>
        <img src={image} alt="Book" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}}</h2>
        <p>{author}</p>
        <p>{category}</p>
        <p>{ratings}</p>
        <div className="card-actions justify-start">
          <button className="py-3 px-7 text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-pink-500 via-red-500 to-red-900  hover:bg-gradient-to-tr">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookOnCategoryCard;
