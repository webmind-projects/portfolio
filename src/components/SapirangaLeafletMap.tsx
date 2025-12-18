import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icon to avoid broken default asset paths in bundlers
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [12, 20],
  iconAnchor: [6, 20],
  popupAnchor: [0, -14],
  shadowSize: [20, 20],
})

// Force tile layer to refresh when map loads
function InvalidateSize() {
  const map = useMap()
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 200)
  }, [map])
  return null
}

export function SapirangaLeafletMap() {
  const position: [number, number] = [-29.6352, -51.0063] // Sapiranga, RS

  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className="z-0 h-48 w-full rounded-2xl"
      style={{ background: '#0f0a1f' }}
    >
      <InvalidateSize />
      {/* CartoDB Dark Matter – dark theme aligned with brand */}
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup className="leaflet-popup-brand">Hub - WebMind</Popup>
      </Marker>
    </MapContainer>
  )
}
