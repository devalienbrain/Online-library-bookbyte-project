import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTheBook = () => {
  const targetBookToUpdate = useLoaderData();
  console.log(targetBookToUpdate);
  const { _id, image, name, category, author, quantity, description, ratings } =
    targetBookToUpdate || {};

  // const navigate = useNavigate();

  const handleUpdateTheBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const category = form.category.value;
    const author = form.author.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const updatedBook = {
      image,
      name,
      category,
      author,
      quantity,
      description,
      ratings,
    };

    console.log(updatedBook);

    // send updated data to the server
    fetch(
      `https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks/${_id}`,
      // `http://localhost:5000/allBooks/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good Job!",
            text: "The Book Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="p-5 w-full lg:w-1/2 mx-auto">
      <h2 className="text-3xl bg-gradient-to-r from-green-500 via-green-700 to-lime-500 bg-clip-text text-transparent text-center font-black">
        UPDATE THE BOOK
      </h2>
      <p className="text-center italic text-xs text-red-600">
        <small>(product id: {_id})</small>
      </p>
      <form onSubmit={handleUpdateTheBook}>
        {/* form */}
        <div className="mb-8">
          {/* 3_category field */}
          <div className="form-control w-full">
            <label htmlFor="category" className="label">
              <span className="label-text text-lg font-bold">
                Book Category
              </span>
            </label>
            <select
              id="category"
              name="category"
              className="input input-bordered  rounded-md drop-shadow-lg w-full"
              defaultValue={category}
            >
              <option value="Biography">Biography</option>
              <option value="Children">Children</option>
              <option value="Law">Law</option>
              <option value="Relationship">Relationship</option>
              <option value="Mystery">Mystery</option>
              <option value="Fiction">Fiction</option>
              <option value="Novel">Novel</option>
              <option value="Science">Science</option>
              <option value="Travel">Travel</option>
            </select>
          </div>

          {/* 1_image field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>

          {/* 2_name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>

          {/* 4_type field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Author</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="author"
                defaultValue={author}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 5_price field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 6_short description field */}
          <div className="form-control w-full hidden">
            <label className="label">
              <span className="label-text text-lg font-bold">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={description}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 7_rating field */}
          <div className="mb-8 form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ratings"
                defaultValue={ratings}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* SUBMIT BUTTON */}
          <div className="form-control w-full">
            <input
              type="submit"
              value="UPDATE"
              className="px-8 py-3 text-red-500 bg-gradient-to-r from-green-500 via-lime-500 to-green-700 hover:bg-gradient-to-b rounded-xl drop-shadow-2xl font-bold text-xl"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTheBook;
