import React from "react";
function ProfileList(item) {
  return (
    <div>
      <img src={item.img} alt="" />
      <p>{item.name}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default ProfileList;
