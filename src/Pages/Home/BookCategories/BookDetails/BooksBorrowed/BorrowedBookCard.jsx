const BorrowedBookCard = ({ borrowedBook, handleReturnABook }) => {
  const {
    _id,
    image,
    bookName,
    category,
    userName,
    userEmail,
    returnDate,
    borrowedDate,
    originalBookId,
  } = borrowedBook;
  // console.log(borrowedBook);
  // console.log(originalBookId);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-12 items-center p-5 border border-black mx-auto rounded-xl hover:text-red-700">
        <div>
          <img className="w-36 rounded-xl" src={image} />
        </div>
        <div>
          <p>
            Book Name: <br /> {bookName}
          </p>
        </div>
        <div>
          <p>
            Book Category: <br /> {category}
          </p>
        </div>
        <div>
          <p>
            Borrowed On: <br /> {borrowedDate}
          </p>
        </div>
        <div>
          <p>
            Return By: <br /> {returnDate}
          </p>
        </div>
        <div>
          <button
            onClick={() => handleReturnABook(_id, originalBookId)}
            className="py-3 px-4 rounded-lg shadow-2xl text-xs text-white bg-gradient-to-r from-lime-400 to-green-700 hover:bg-gradient-to-tr"
          >
            RETURN THE BOOK
          </button>
        </div>
      </div>
    </>
  );
};

export default BorrowedBookCard;
