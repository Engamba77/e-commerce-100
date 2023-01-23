import React from "react";

function ProfileList(item) {
  return (
    <div>
      <img src={item.images} alt="" />
      <p>{item.name}</p>
      <p>{item.email}</p>
    </div>
  );
}

export default ProfileList;
