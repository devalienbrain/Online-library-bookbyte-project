import ribbon from "../../../../public/Resources/facts/ribon.png";
import projects from "../../../../public/Resources/facts/projects.png";
import customers from "../../../../public/Resources/facts/customers.png";
import email from "../../../../public/Resources/facts/email.png";
import { useEffect } from "react";
import Aos from "aos";
function FactsSection() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="font-bold my-7">
      <h3 className="text-3xl font-bold py-7 bg-gradient-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
        FACTS ABOUT US WE LOVE TO SHARE
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <FactCard imageSrc={ribbon} number="7" title="Awards Winnings" />
        <FactCard imageSrc={projects} number="12370" title="Total Books" />
        <FactCard
          imageSrc={customers}
          number="143590"
          title="Readers Visited"
        />
        <FactCard imageSrc={email} number="23146" title="Email Supports" />
      </div>
    </section>
  );
}

function FactCard({ imageSrc, number, title }) {
  return (
    <div className="p-20 border rounded-xl shadow-xl" data-aos="fade">
      <img className="mx-auto" src={imageSrc} alt={title} />
      <h1 className="text-xl text-red-700 py-2">{number}</h1>
      <p className="font-bold">{title}</p>
    </div>
  );
}

export default FactsSection;
