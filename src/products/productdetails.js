import React from "react";
// import { useContext } from "react";
// import { MessageContext } from "../cart";

function ProductDetails(item) {
  // const { count } = useContext(MessageContext);

  return (
    <div>
      <img src={item.img} alt="" style={{ width: "100px" }} />
      <p>{item.name}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default ProductDetails;
