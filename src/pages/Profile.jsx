import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data/data.json";
const Profile = () => {
  const params = useParams();
  const id = parseInt(params.id);
  console.log(id);
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#C4A484",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div className="image">
          <img
            src={data[id].image}
            width="250px"
            height="250px"
            style={{ borderRadius: "50%", border: "8px solid red" }}
            alt=""
          />
        </div>
        <div className="detail">
          <div
            className="username"
            style={{ color: "white", fontSize: "16px", margin: "8px 0" }}
          >
            @{data[id].username}
          </div>
          <div
            className="followsDetail"
            style={{
              display: "flex",
              margin: "8px 0",
              columnGap: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              <span>{data[id].follower}</span>
              Followers
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              <span>{data[id].following}</span>
              Following
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/">Back</a>
      </div>
    </>
  );
};

export default Profile;
