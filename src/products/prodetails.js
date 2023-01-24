import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileList from "./prolist";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {profile.map((element, index) => {
        return (
          <div key={index}>
            <ProfileList
              img={element.images}
              name={element.title}
              price={element.price}
            />
            <button>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
