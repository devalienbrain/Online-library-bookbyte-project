import feat from "../../../../public/Resources/meetus.jpg";
import { MdOutlineBorderColor } from "react-icons/md";

function MeetUs() {
  return (
    <section className="my-10 container mx-auto ">
      <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex-1">
          <img src={feat} alt="Featured Product" className="w-full" />
        </div>
        <div className="flex-1 text-left pr-32">
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-500 to-red-900 bg-clip-text text-transparent border-b-2 py-5">
            5 REASONS WHY VISIT OUR LIBRARY
          </h2>
          <p className="text-lg text-yellow-600  font-semibold my-8">
            <MdOutlineBorderColor></MdOutlineBorderColor>
            Access to a Wide Range of Books
          </p>
          <p className="text-lg text-yellow-600  font-semibold mb-9">
            <MdOutlineBorderColor></MdOutlineBorderColor>A Quiet and Peaceful
            Environment
          </p>
          <p className="text-lg text-yellow-600  font-semibold mb-9">
            <MdOutlineBorderColor></MdOutlineBorderColor>
            Free Resource for All Ages
          </p>
          <p className="text-lg text-yellow-600  font-semibold mb-9">
            <MdOutlineBorderColor></MdOutlineBorderColor>
            Expert Assistance And Discussions Together
          </p>
          <p className="text-lg text-yellow-600  font-semibold mb-9">
            <MdOutlineBorderColor></MdOutlineBorderColor>
            Community Meetups and Cultural Events
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetUs;
