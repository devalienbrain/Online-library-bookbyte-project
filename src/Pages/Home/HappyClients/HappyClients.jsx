import user1 from "../../../../public/Resources/user1.png";
import user2 from "../../../../public/Resources/user2.png";
import user3 from "../../../../public/Resources/user3.png";
function HappyClientsSection() {
  return (
    <section className="mt-16 mb-16">
      <h2 className="font-black text-4xl text-center pb-16">
        Happy <span className="text-[#E76F51]">Clients says</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-around gap-9">
        {/* Happy Client Card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user1} alt="User" className="rounded-xl w-36" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-sm font-normal">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
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
            <p className="text-[#23A6F0]">Regina Miles</p>
            <p className="text-[#252B42]">Banker</p>
          </div>
        </div>
        {/* Happy Client Card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user2} alt="User" className="rounded-xl w-36" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-sm font-normal">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
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
            <p className="text-[#23A6F0]">Regina Miles</p>
            <p className="text-[#252B42]">Banker</p>
          </div>
        </div>
        {/* Happy Client Card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={user3} alt="User" className="rounded-xl w-36" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-sm font-normal">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
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
            <p className="text-[#23A6F0]">Regina Miles</p>
            <p className="text-[#252B42]">Banker</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyClientsSection;
