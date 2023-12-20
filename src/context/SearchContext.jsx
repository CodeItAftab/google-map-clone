import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();
// https://nominatim.openstreetmap.org/search?q=Unter%20den%20Linden%201%20Berlin&format=json&addressdetails=1&limit=1&polygon_svg=1

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(
    function () {
      const controller = new AbortController();
      async function search() {
        // setSearchResult([]);
        try {
          const res = await fetch(
            `   https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`,
            { signal: controller.signal }
          );
          const data = await res.json();
          console.log(data);
          setSearchResult(data.filter((e, i) => i < 5));
        } catch (err) {
          console.log(err);
        }
      }
      search();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <SearchContext.Provider
      value={{ query, setQuery, searchResult, setSearchResult }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
