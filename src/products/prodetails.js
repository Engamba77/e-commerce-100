import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProfileList from "./prolist";
import { StyledContent } from "../pages/styled";
import { MessageContext } from "../cart";

function Profile() {
  const [profile, setProfile] = useState([]);

  const { counter } = useContext(MessageContext);

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
          <StyledContent>
            <div key={index}>
              <ProfileList
                img={element.images}
                name={element.title}
                price={element.price}
              />
              <button
                onClick={() => {
                  counter();
                }}
              >
                Add to Cart
              </button>
            </div>
          </StyledContent>
        );
      })}
    </div>
  );
}

export default Profile;
