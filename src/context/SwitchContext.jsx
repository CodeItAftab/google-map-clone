import { createContext, useContext, useState } from "react";

const SwitchContext = createContext();

const SwitchProvider = ({ children }) => {
  const [switchOn, setSwitchOn] = useState(true);
  return (
    <SwitchContext.Provider value={{ switchOn, setSwitchOn }}>
      {children}
    </SwitchContext.Provider>
  );
};

const useSwitch = () => useContext(SwitchContext);

export { SwitchProvider, useSwitch };
