const BorrowedBookCard = ({ booking }) => {
  const { img, service_title, price } = booking; // Add curly braces for destructuring
  return (
    <>
      <div className="flex gap-12 items-center p-5 border border-black w-1/2 mx-auto rounded-xl hover:shadow-xl">
        <div>
          <button>X</button>
        </div>
        <div>
          <img className="w-32 rounded-xl" src={img} />
        </div>
        <div>
          <p>{service_title}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default BorrowedBookCard;
