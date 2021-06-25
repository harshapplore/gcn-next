import Nav from "shared/Nav";
import Footer from "shared/Footer";

import Banner from "./Banner";
import WeeklyProducts from "./WeeklyProducts";
import NewProducts from "./NewProducts";


const Home = () => {
  return <>
  <Nav />
  <Banner />
  <WeeklyProducts />
  <NewProducts />
  <Footer />
  </>;
}

export default Home;