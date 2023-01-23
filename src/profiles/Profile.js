import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileList from "./ProfileList";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=in&results=5&page=2")
      .then((res) => {
        setProfile(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {profile.map((element, index) => {
        const name =
          element.name.title +
          " " +
          element.name.first +
          " " +
          element.name.last;
        const images = element.picture.large;
        return (
          <div key={index}>
            <ProfileList images={images} name={name} email={element.email} />
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
