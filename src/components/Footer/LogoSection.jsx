import alibaba from "../../../public/Resources/logo/Alibaba.svg";
import amazon from "../../../public/Resources/logo/Amazon.svg";
import daraz from "../../../public/Resources/logo/Daraz.svg";
import ebay from "../../../public/Resources/logo/Ebay.svg";
import rakuten from "../../../public/Resources/logo/Rakuten.svg";
import target from "../../../public/Resources/logo/Target.svg";
import walmart from "../../../public/Resources/logo/Walmart.svg";

function LogosSection() {
  return (
    <section className="container mx-auto">
      {/* <h6 className="text-left pl-7 text-xs mt-6">Our Sponsor Partners</h6> */}
      <div className="p-7 flex justify-between align-middle items-center gap-3 border-b-1 border-t-1 border-white">
        <h6 className="text-xs underline">Our Sponsor Partners</h6>
        <Logo logoSrc={alibaba} />
        <Logo logoSrc={amazon} />
        <Logo logoSrc={daraz} />
        <Logo logoSrc={ebay} />
        <Logo logoSrc={rakuten} />
        <Logo logoSrc={target} />
        <Logo logoSrc={walmart} />
      </div>
    </section>
  );
}

function Logo({ logoSrc, alt }) {
  return (
    <div className="logo">
      <img className="h-5" src={logoSrc} alt={alt} />
    </div>
  );
}

export default LogosSection;
