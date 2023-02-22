import React from "react";
import { NavLink } from "react-router-dom";
import data from "../assets/data/data.json";
const Home = () => {
  return (
    <>
      {data.map((res, index) => {
        return (
          <NavLink to={`/profile/${index}`}>
            <div
              key={index}
              style={{
                backgroundColor: "#192841",
                marginBottom: "10px",
                color: "white",
                display: "flex",
                padding: "8px 0",
              }}
            >
              <div className="image">
                <img
                  width="50px"
                  height="50px"
                  src={res.image}
                  alt="gambar profile"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="text">
                <h4>@{res.username}</h4>
                <h5>Followers: {res.follower}</h5>
              </div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default Home;
