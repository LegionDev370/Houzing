import { createContext } from "react";
import { useReducer } from "react";
const PropertiesContext = createContext();
import { reducer } from "./reducer";
const PropertiesRoot = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};
export default PropertiesRoot;
