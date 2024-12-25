import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import List from "../components/context/List";

const Home = () => {
  return (
    <div>
      <>
        <Navbar />
        <Banner />
        <List>
          <Freebook />
        </List>
        <Footer />
      </>
    </div>
  );
};

export default Home;
