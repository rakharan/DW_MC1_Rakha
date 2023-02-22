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
            style={{ color: "white", fontSize: "16px" }}
          >
            @{data[id].username}
          </div>
          <div className="followsDetail">
            <div>{data[id].follower} Followers</div>
            <div>{data[id].following}Followers</div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/">back</a>
      </div>
    </>
  );
};

export default Profile;
