import React from "react";
function ProductDetails(item) {
  return (
    <div>
      <img src={item.img} alt="" style={{ width: "100px" }} />
      <p>{item.name}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default ProductDetails;
