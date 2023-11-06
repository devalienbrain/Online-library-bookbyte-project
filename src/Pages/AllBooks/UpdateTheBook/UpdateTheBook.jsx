import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const targetProductToUpdate = useLoaderData();
  // console.log(targetProductToUpdate);
  const { _id, image, name, brand, type, price, ratings, description } =
    targetProductToUpdate;

  const navigate = useNavigate();

  const handleUpdateTheProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const updatedProduct = {
      image,
      name,
      brand,
      type,
      price,
      description,
      ratings,
    };

    console.log(updatedProduct);

    // send updated data to the server
    fetch(
      `https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good Job!",
            text: "The Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate(`/brandedCars/${brand}`);
        }
      });
  };

  return (
    <div className="p-5 w-full lg:w-1/2 mx-auto">
      <h2 className="text-3xl text-green-900 text-center font-black">
        UPDATE THE PRODUCT
      </h2>
      <p className="text-center text-red-600">
        <small>product id: {_id}</small>
      </p>
      <form onSubmit={handleUpdateTheProduct}>
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
          {/* 3_brand name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 4_type field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                defaultValue={type}
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 5_price field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                defaultValue={price}
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
              className="px-8 py-3 text-white border bg-green-800 hover:bg-green-700 rounded-xl drop-shadow-2xl font-bold text-xl"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
