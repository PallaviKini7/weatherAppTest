import Navbar from "../../components/navbar/navbar";
import TabsHeader from "../../components/navbarComponent/navbarComponent";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <Navbar />
        <TabsHeader />
      </div>
    </div>
  );
};

export default Home;
