import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StyledContent } from "../pages/styled";
import { MessageContext } from "../cart";
import ProductDetails from "./productdetails";

function ProductList() {
  const [profile, setProfile] = useState([]);

  const { counter, setCartProducts } = useContext(MessageContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div>
      {profile.map((element, index) => {
        return (
          <StyledContent>
            <div key={index}>
              <ProductDetails
                img={element.image}
                name={element.title}
                price={element.price}
              />

              <button
                onClick={() => {
                  counter();
                  addToCart(element);
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

export default ProductList;
