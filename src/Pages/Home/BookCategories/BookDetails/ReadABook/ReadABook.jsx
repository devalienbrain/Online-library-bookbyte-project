import { useLoaderData, useParams } from "react-router-dom";

const ReadABook = () => {
  const books = useLoaderData();
  const { id } = useParams();
  // const navigate = useNavigate();
  const targetedBook = books.find((book) => id === book._id);

  const { name, category, author, description } =
    targetedBook || {};
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center align-middle">
      <div className="p-10 rounded">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body text-center">
            <h2 className="text-lg font-semibold text-center py-4">
              {category} book
            </h2>
            <h2 className="text-5xl font-bold text-center py-1">{name}</h2>
            <span>----- by ----</span>
            <h2 className="text-2xl uppercase font-black text-center py-2">
              {author}
            </h2>
            <div className="h-32"></div>
            <p>
              This book is about <br /> {description}
            </p>
            <div className="h-32"></div>

            <h1>All rights preserved by Author {author} </h1>
            <h1>Copyright @2023 </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadABook;
