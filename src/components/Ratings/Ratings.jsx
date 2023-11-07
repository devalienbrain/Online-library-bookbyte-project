import Rating from 'react-rating';
// import { FaStar } from "react-icons/fa"

function UserRating() {
  return (
    <div>
      <Rating
        // <FaStar size={50}></FaStar>
        initialRating={3}
        emptySymbol="fa fa-star-0 fa-2x"
        fullSymbol="fa fa-star fa-2x"
        readonly
        className='text-xs text-red-400'
      />
    </div>
  );
}

export default UserRating;