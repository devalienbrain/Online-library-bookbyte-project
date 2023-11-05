import user1 from "../../../../public/Resources/user1.png";
import user2 from "../../../../public/Resources/user2.png";
import user3 from "../../../../public/Resources/user3.png";
function HappyClientsSection() {
  return (
    <section className="mt-16 mb-16">
      <h2 className="font-black text-4xl text-center pb-16 text-orange-500">
        Happy Reader Reviews
      </h2>
      <div className="flex flex-col lg:flex-row justify-around gap-9">
        {/* Happy Client Card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user1} alt="User" className="rounded-xl w-36" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-sm font-normal">
              "Inspiring guide to transforming our life through actionable tips,
              offering practical insights on holistic health, habits, and
              happiness."
            </p>
            {/* Rating starts */}
            <div className="rating p-1 flex gap-2">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* Rating Ends */}
            <p className="text-red-800">Ms. Style Icon</p>
            <p className="text-green-700 font-bold">Lifestyle Modifier</p>
          </div>
        </div>
        {/* Happy Client Card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user2} alt="User" className="rounded-xl w-36" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-sm font-normal">
              "Thrilling and immersive journey filled with suspense, action, and
              breathtaking landscapes. An adventure that keeps you on the edge
              of your seat. Must visit place. Come with popcorn!"
            </p>
            {/* Rating starts */}
            <div className="rating p-1 flex gap-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* Rating Ends */}
            <p className="text-red-800">Panda T. Great</p>
            <p className="text-green-700 font-bold">Adventurer/ Explorer</p>
          </div>
        </div>
        {/* Happy Client Card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user3} alt="User" className="rounded-xl w-36" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-sm font-normal">
              "New Technology unveils the digital frontier. A compelling vision
              of innovation's impact on our world, ushering in an era of endless
              possibilities."
            </p>
            {/* Rating starts */}
            <div className="rating p-1 flex gap-2">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* Rating Ends */}
            <p className="text-red-800">Mr. Alien Brain</p>
            <p className="text-green-700 font-bold">Tech Scientist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyClientsSection;
