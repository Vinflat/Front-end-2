import React, { useEffect } from "react";
import { useState } from "react";
import {
  Marker,
  Popup,
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

export default function Map({ setPos, defaultValue }) {
  useEffect(() => {
    setPos({
      name: "location",
      value: defaultValue,
    });
  }, []);
  return (
    <MapContainer
      center={defaultValue}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker pos={defaultValue} setPos={setPos} />
    </MapContainer>
  );
}

function LocationMarker({ pos, setPos }) {
  const [position, setPosition] = useState(pos);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setPos({ name: "location", value: e.latlng });
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       console.log(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }
