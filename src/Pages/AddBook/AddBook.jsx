import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddAProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const newProduct = {
      image,
      name,
      brand,
      type,
      price,
      description,
      ratings,
    };

    console.log(newProduct);

    // send data to the server
    fetch(
      "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          {/* 3_brand name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="book category"
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
                name="type"
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
                name="price"
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
