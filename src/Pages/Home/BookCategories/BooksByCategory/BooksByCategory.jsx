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
        <div className="min-h-screen flex justify-center items-center text-left">
          <div className="flex flex-col space-y-11">
            <h2 className="text-2xl md:text-5xl font-black text-red-700">
              No Book Available On {name}
            </h2>
            <h1 className="uppercase text-sm font-semibold py-7 bg-gradient-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
              Books On This Category Will Add Soon. Please Visit Later.
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center my-10  container mx-auto">
            <h3 className="text-4xl font-black text-green-950">
              Available Books On "{name}" Category
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
