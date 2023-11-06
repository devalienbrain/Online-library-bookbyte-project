import { useLoaderData, useParams } from "react-router-dom";
import BookOnCategoryCard from "../BookOnCategoryCard";

const BooksByCategory = () => {
  const allBooks = useLoaderData();
  const { name } = useParams();
  // console.log(brandedCars, name);
  const filteredBooksByCategory = allBooks.filter((book) => {
    // console.log(brandedCar.brand);
    return name === book.category;
  });
  return (
    <>
      {filteredBooksByCategory.length === 0 ? (
        <div className="container mx-auto flex justify-center items-center min-h-screen bg-green-800 text-white font-bold text-3xl my-10">
          <div>
            <p>
              Oops.. ! No Book Available Of This Category:{" "}
              <span className="text-red-800">{name} </span>!
            </p>
            <p>We will add soon.</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center my-10  container mx-auto">
            <h3 className="text-4xl font-black text-green-950">
              Available Books On Category: {name}
            </h3>
            <p>Total Books = {filteredBooksByCategory.length}</p>
            <div className="py-9 grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredBooksByCategory.map((filteredBookOnCategory) => (
                <BookOnCategoryCard
                  key={filteredBookOnCategory._id}
                  filteredBookOnCategory={filteredBookOnCategory}
                ></BookOnCategoryCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BooksByCategory;
