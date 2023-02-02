import React, { useContext } from "react";
import { MessageContext } from "../cart";
import { StyledContent } from "../pages/styled";
import ProductDetails from "../products/productdetails";

function CartItems() {
  const { counter, setCartProducts, cartProducts } = useContext(MessageContext);

  const clearCart = () => {
    setCartProducts([]);
  };


  return (
    <div>
      <button
        onClick={() => {
          clearCart();
        }}
      >
        CLEAR CART
      </button>

      {cartProducts.map((element, i) => {
        return (
          <StyledContent>
            <div key={i}>
              <ProductDetails
                img={element.image}
                name={element.title}
                price={element.price}
              />
            </div>
          </StyledContent>
        );
      })}
    </div>
  );
}

export default CartItems;
