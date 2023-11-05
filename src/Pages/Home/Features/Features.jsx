import feat from "../../../../public/Resources/features.jpg";

function Features() {
  return (
    <section className="bg-yellow-500 text-blue-950 italic tracking-wide leading-7 my-10">
      <div className="container mx-auto py-16 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 text-left pr-32">
          <h2 className="text-3xl font-bold md:text-4xl py-5">Meet BookByte</h2>
          <p className="text-sm md:text-base font-semibold mb-8">
            BookByte represents a critical pivot in the Library Technology
            landscape. Together libraries and vendors have created an
            environment for collaboration that allows independence and community
            ownership of the capabilities and roadmap for technology that powers
            the library, and the process for managing it. While the technology
            and architecture are to be admired, perhaps the greatest strength of
            BookByte is the community that surrounds it. Open, collaborative,
            modern, sophisticated … all community owned and directed. Welcome to
            BookByte!
          </p>
        </div>
        <div className="flex-1">
          <img src={feat} alt="Featured" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Features;
