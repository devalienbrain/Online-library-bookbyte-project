import { useEffect, useState } from "react";
import BookCategoryCard from "./BookCategoryCard";

const BookCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://library-management-devalienbrain-crud-jwt-server.vercel.app/bookCategories"
      // "http://localhost:5000/bookCategories"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="text-center my-20">
      <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent border-b-2 py-5">
        Book Categories
      </h3>
      <p className="text-xs py-3"> Find Your Desired Books By Genres </p>
      <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category) => (
          <BookCategoryCard
            key={category.id}
            category={category}
          ></BookCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
