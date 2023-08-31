import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import ShimmerProductCards from "../../components/ShimmerProductCards/ShimmerProductCards";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await axios.get(`${API_URL}/products`);
        const data = await response.data;
        setProducts(data);
      } catch (err) {
        alert(err);
      }
    }
    fetchAllProducts();
  }, []);

  console.log("products", products);
  return (
    <div>
      <Navbar />
      <div className="home-inner-container">
        <SearchBar />
        <div className="home-product-list">
          {products.length === 0 ? (
            <ShimmerProductCards />
          ) : (
            products?.map((product, idx) => (
              <React.Fragment key={idx}>
                <ProductCard product={product} />
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
