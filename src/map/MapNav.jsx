import SearchResultList from "../components/SearchResultList";
import { useSearch } from "../context/SearchContext";
import { useSidebar } from "../context/SidebarContext";
import { useSwitch } from "../context/SwitchContext";

function MapNav() {
  const { switchOn } = useSwitch();
  const { query, setQuery, searchResult } = useSearch();
  const { setShowSidebar } = useSidebar();

  return (
    <div
      className={`map-nav ${!switchOn && "move-left"} ${
        !switchOn && "increase-search-box-width"
      } `}
    >
      <div
        className={`form-container ${
          searchResult.length > 0 &&
          query.length > 2 &&
          "remove-search-box-border"
        }`}
      >
        {!switchOn && (
          <button
            className="side-nav-view-btn btn"
            onClick={() => setShowSidebar(true)}
          >
            <i className="uis uis-bars icon"></i>
          </button>
        )}
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search on Google Maps"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <button className="map-nav-direction-btn btn">
          <i className="uis uis-directions icon direction-icon"></i>
        </button>
      </div>
      <SearchResultList />
    </div>
  );
}

export default MapNav;
