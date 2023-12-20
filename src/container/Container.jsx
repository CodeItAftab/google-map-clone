import { SearchProvider } from "../context/SearchContext";
import { useSidebar } from "../context/SidebarContext";
import { SwitchProvider } from "../context/SwitchContext";
import MapContainer from "../map/MapContainer";
import Sidebar from "../sidebar/Sidebar";
import { SelectedLocationProvider } from "../context/SelectedLocation";

function Home() {
  const { showSidebar, setShowSidebar } = useSidebar();
  return (
    <div className="container">
      <SearchProvider>
        <SelectedLocationProvider>
          <SwitchProvider>
            <MapContainer />
            <Sidebar />
            <div
              className={`blur-div ${showSidebar && "show-blur-div"}`}
              onClick={() => setShowSidebar(false)}
            ></div>
          </SwitchProvider>
        </SelectedLocationProvider>
      </SearchProvider>
    </div>
  );
}

export default Home;
