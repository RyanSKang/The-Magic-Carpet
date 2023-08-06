import React from "react";
import Results from "../../pages/results";

Results = () => {
  return (
    <div className="search-bar">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn ">
            <span>Search for Flights</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="searchInputs flex" >
          <div className="singleInput flex">
            <div className="texts">
              <h4>Location</h4>
              <input
                type="text"
                placeholder="Where would you like to travel?"
              />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="texts">
              <h4>Travelers</h4>
              <input
                type="text"
                placeholder="How many travelers will there be?"
              />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add a date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add a date" />
            </div>
          </div>

          <button className="btn">Search for a flight!</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
