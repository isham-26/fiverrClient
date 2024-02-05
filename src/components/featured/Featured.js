import React from "react";
import "./featured.scss";
import search from "../../assets/search.png";
import man from "../../assets/man.png"
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="icon" />
              <input type="text" placeholder='try "To bulding mobile app"' />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
            <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
