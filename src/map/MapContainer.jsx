import { useSwitch } from "../context/SwitchContext";
import Map from "./Map";
import MapNav from "./MapNav";
import SideNav from "./SideNav";

function MapContainer() {
  const { switchOn } = useSwitch();
  return (
    <div className="map-container">
      {switchOn && <SideNav />}
      <MapNav />
      <Map />
    </div>
  );
}

export default MapContainer;
