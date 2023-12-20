import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// https://nominatim.openstreetmap.org/search?q=Unter%20den%20Linden%201%20Berlin&format=json&addressdetails=1&limit=1&polygon_svg=1

// https://nominatim.openstreetmap.org/search?<params>
// const REQ_URL = "   https://nominatim.openstreetmap.org/search?";

function Map() {
  const position = [22.5726, 88.3639];
  // const position = [20.5937, 78.9629];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={"topright"}
      className="map"
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution="Google Maps Satellite"
        // url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker position={position} draggable={true}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ZoomControlPosition />
    </MapContainer>
  );
}

function ZoomControlPosition() {
  const map = useMap();
  map.zoomControl.setPosition("bottomright");
  map.on("click", (e) => console.log(e.latlng));
  return null;
}

export default Map;

// googleStreets = L.tileLayer(
//   "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
//   {
//     maxZoom: 20,
//     subdomains: ["mt0", "mt1", "mt2", "mt3"],
//   }
// );
