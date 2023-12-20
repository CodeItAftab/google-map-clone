import { createContext, useContext, useState } from "react";

const SelectedLocationContext = createContext();

function SelectedLocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  return (
    <SelectedLocationContext.Provider
      value={{ selectedLocation, setSelectedLocation }}
    >
      {children}
    </SelectedLocationContext.Provider>
  );
}

const useSelectedLocation = () => useContext(SelectedLocationContext);

export { SelectedLocationProvider, useSelectedLocation };
