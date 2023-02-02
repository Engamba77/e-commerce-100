import { useState } from "react";
import { createContext } from "react";

export const MessageContext = createContext({});

export const MessageContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const counter = () => {
    setCount(count + 1);
  };

  

  return (
    <div>
      <MessageContext.Provider
        value={{
          count,
          counter,
          cartProducts,
          setCartProducts,
        }}
      >
        {children}
      </MessageContext.Provider>
    </div>
  );
};
