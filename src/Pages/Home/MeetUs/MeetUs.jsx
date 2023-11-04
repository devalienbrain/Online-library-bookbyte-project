import feat from "../../../../public/Resources/meetus.jpg";

function MeetUs() {
  return (
    <section className="my-10 container mx-auto ">
      <div className="py-16 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex-1">
          <img src={feat} alt="Featured Product" className="w-full" />
        </div>
        <div className="flex-1 text-center md:text-left pr-32">
          <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
            Meet BookByte
          </h2>
          <p className="text-lg font-semibold mb-8">
            BookByte represents a critical pivot in the Library Technology
            landscape. Together libraries and vendors have created an
            environment for collaboration that allows independence and community
            ownership of the capabilities and roadmap for technology that powers
            the library, and the process for managing it. While the technology
            and architecture are to be admired, perhaps the greatest strength of
            FOLIO is the community that surrounds it. Open, collaborative,
            modern, sophisticated … all community owned and directed. Welcome to
            BookByte!
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetUs;
