import logo from "../../../public/Resources/logo.png";

const Header = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="container mx-auto flex justify-center md:justify-start align-middle items-center gap-2 py-3">
        <div>
          <img className="w-7 rounded-full" src={logo} />
        </div>
        <div className="normal-case text-lg font-black">
          Book<span className="">Byte</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
