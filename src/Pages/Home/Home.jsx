import Banner from "./Banner/Banner";
import BookCategories from "./BookCategories/BookCategories";
import FactsSection from "./Facts/FactsSection";
import Features from "./Features/Features";
import HappyClientsSection from "./HappyClients/HappyClients";
import MeetUs from "./MeetUs/MeetUs";
import ReadingMatters from "./ReadingMatters/ReadingMatters";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <BookCategories></BookCategories>
        <FactsSection></FactsSection>
      </div>
      <Features></Features>
      <div className="container mx-auto">
        <MeetUs></MeetUs>
        <ReadingMatters></ReadingMatters>
        <HappyClientsSection></HappyClientsSection>
      </div>
    </div>
  );
};

export default Home;
