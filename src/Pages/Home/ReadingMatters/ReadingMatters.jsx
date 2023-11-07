import brain from "../../../../public/Resources/brain.png";
import graphics from "../../../../public/Resources/graphics.png";
const ReadingMatters = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-xl transition-all duration-500 hover:bg-right-bottom relative">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <div className="flex-1">
            <img src={brain} />
            <div>
              <p className="text-3xl md:text-4xl uppercase font-black bg-gradient-to-r from-lime-400 to-green-700 bg-clip-text text-transparent pb-3">
                READING MATTERS
              </p>
              <p className="text-xs bg-gradient-to-r from-pink-800 via-purple-900 to-indigo-700 bg-clip-text text-transparent pb-10">
                And bookbyte is the best place for you to read
              </p>
            </div>
          </div>
          <div className="flex-1 top-0 right-0 absolute">
            <img src={graphics} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadingMatters;
