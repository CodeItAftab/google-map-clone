import { useSearch } from "../context/SearchContext";
import SearchResultItem from "./SearchResultItem";

function SearchResultList() {
  const { query, searchResult } = useSearch();

  return (
    <>
      {searchResult.length > 0 && query.length > 2 && (
        <ul className="search-result-list">
          {searchResult.map((place) => {
            const placeName = place.display_name.split(",");
            const displayName = placeName.filter((e, i) => i < 3).join(",");
            console.log(displayName);
            return (
              <SearchResultItem
                key={place.place_id}
                displayName={displayName}
                place={place}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default SearchResultList;
