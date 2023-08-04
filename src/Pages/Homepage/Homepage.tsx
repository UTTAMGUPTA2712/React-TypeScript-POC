import AboutUs from "../../Components/AboutUs/AboutUs";
import NavBar from "../../Components/NavBar/NavBar";
import "./Homepage.css"
const Homepage = () => {
  return (
    <>
      <div id="home-div">
        <NavBar />
        <div id="home"/>
        <div id="about"><AboutUs/></div>
        <div id="contact"></div>
      </div>
    </>
  );
};
export default Homepage;
