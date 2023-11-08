const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(https://i.ibb.co/2M6xy5v/Library0.jpg)",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="hero-overlay bg-opacity-10">
        <img className="w-full h-full" src="/Resources/gradient.png" />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-2xl md:text-5xl text-white font-bold">
            THERE IS NO FRIEND AS LOYAL AS A BOOK
          </h1>
          <p>
            Libraries change lives for the better. A library is not a luxury but
            one of the necessities of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
