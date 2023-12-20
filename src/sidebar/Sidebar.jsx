import Line from "../components/Line";
import SidebarOption from "../components/SidebarOption";
import Switch from "../components/Switch";
import { useSidebar } from "../context/SidebarContext";

function Sidebar() {
  const { showSidebar, setShowSidebar } = useSidebar();
  return (
    <div className={`sidebar ${showSidebar && "show-side-bar"}`}>
      <div className="logo-container">
        <img src="./googlemapLogo.png" alt="Google Maps" className="logo" />
        <button
          className="close-sidebar-btn"
          onClick={() => setShowSidebar(false)}
        >
          <i className="uil uil-times"></i>
        </button>
      </div>
      <SidebarOption>
        {/* <i className="bi bi-layout-sidebar sidebar-option-icon"></i> */}
        <span className="material-symbols-outlined sidebar-option-icon">
          dock_to_right
        </span>
        <div className="sidenav-view-option">
          <span className="option-title">Show side bar</span> <Switch />
        </div>
      </SidebarOption>
      <Line />
    </div>
  );
}

export default Sidebar;
