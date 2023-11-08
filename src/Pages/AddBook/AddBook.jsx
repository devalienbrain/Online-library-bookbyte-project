import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddAProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const category = form.category.value;
    const author = form.author.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const newBook = {
      image,
      name,
      category,
      author,
      quantity,
      description,
      ratings,
    };

    // console.log(newBook);

    // send data to the server
    fetch(
      "https://library-management-devalienbrain-crud-jwt-server.vercel.app/allBooks",
      // "http://localhost:5000/allBooks",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Cool!",
            text: "The Book Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="p-5 w-full lg:w-1/2 mx-auto">
      <h2 className="text-3xl bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent text-center font-black">
        ADD A BOOK
      </h2>
      <form onSubmit={handleAddAProduct}>
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
                placeholder="book image url"
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
                placeholder="name of the book"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>

          {/* 4_type field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Author Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="author"
                placeholder="author of the book"
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
                placeholder="book quantity"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 6_short description field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="short description of the book"
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
                placeholder="book rating"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* SUBMIT BUTTON */}
          <div className="form-control w-full">
            <input
              type="submit"
              value="Add The Book"
              className="p-7 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-pink-400 via-red-800 from-red-500 hover:bg-gradient-to-tl"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
