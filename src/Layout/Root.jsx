import { Outlet } from "react-router-dom";
import "../../src/index.css";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
