import feat from "../../../../public/Resources/features.jpg";

function Features() {
  return (
    <section className="bg-yellow-500 my-10">
      <div className="container mx-auto py-16 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 text-center md:text-left pr-32">
          <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
            Featured products at one place
          </h2>
          <p className="text-lg font-semibold mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="flex-1">
          <img src={feat} alt="Featured Product" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Features;
