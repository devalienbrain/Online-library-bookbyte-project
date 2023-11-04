import { Link } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";
import arrow from "../../../public/Resources/arrow-forward.svg";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-left">
      <div className="flex flex-col space-y-11">
        <div>
          <BiErrorAlt></BiErrorAlt>
          Page Not Found!
        </div>
        <h2 className="text-5xl md:text-9xl font-black text-red-700">4 O 4</h2>
        <h1 className="text-xl text-red-900 font-bold"> e r r o r !</h1>
        <Link to={"/"}>
          <div className="flex gap-2 text-sm bg-black py-2 px-5 rounded-xl text-white">
            <span className=" italic ">Go Back Home</span>
            <img src={arrow} alt="Arrow" className="w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
