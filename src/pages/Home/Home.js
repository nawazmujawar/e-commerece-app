import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-inner-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
