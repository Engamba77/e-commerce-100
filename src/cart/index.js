import { useState } from "react";
import { createContext } from "react";

export const MessageContext = createContext({});

export const MessageContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <MessageContext.Provider
        value={{
          count,
          counter,
        }}
      >
        {children}
      </MessageContext.Provider>
    </div>
  );
};
