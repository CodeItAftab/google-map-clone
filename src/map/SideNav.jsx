import { useSidebar } from "../context/SidebarContext";

function SideNav() {
  const { setShowSidebar } = useSidebar();
  return (
    <div className="side-nav">
      <button
        type="button"
        className="btn"
        onClick={() => setShowSidebar(true)}
      >
        <i className="uis uis-bars icon"></i>
      </button>
      <button className="side-nav-option">
        <i className="uil uil-bookmark side-nav-option-icon"></i>
        <span>Saved</span>
      </button>
      <button className="side-nav-option">
        <i
          className="uil uil-history side-nav-option-icon"
          style={{ fontSize: "1.2rem", fontWeight: "500" }}
        ></i>
        <span>Recents</span>
      </button>
    </div>
  );
}

export default SideNav;
