import { useSelectedLocation } from "../context/SelectedLocation";

function SearchResultItem({ place, displayName }) {
  const { setSelectedLocation } = useSelectedLocation();
  return (
    <li className="search-item" onClick={() => setSelectedLocation(place)}>
      <span className="material-symbols-outlined location-icon">
        location_on
      </span>
      <span>{displayName}</span>
    </li>
  );
}

export default SearchResultItem;
