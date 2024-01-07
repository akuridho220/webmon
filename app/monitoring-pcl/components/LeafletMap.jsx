import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

const MapComponent = ({ petugas, position, zoom, radius }) => {
	const mapRef = useRef(null);
	const petugasIcon = L.icon({iconUrl: '/img/maskot/2.png', iconSize: [38, 50]})

	useEffect(() => {
		if (mapRef.current) {
			if (radius === true) {
				L.circle(position, {
					color: '#3b84a5',	  // celana PDA
					fillColor: '#addfee', // baju PDA
					fillOpacity: 0.5,
					radius: 50
				}).addTo(mapRef.current);
			}
			mapRef.current.flyTo(position, zoom);
		}
	}, [position, zoom, radius]);

	return (
		<MapContainer
			className='w-full mb-4 z-0'
			center={position}
			zoom={zoom}
			style={{ height: '65vh' }}
			ref={mapRef}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; OpenStreetMap contributors"
				maxZoom={19}
			/>
			{petugas.map((p) => (
				<Marker position={[p.lat, p.long]} icon={petugasIcon}>
					<Tooltip>
						<b>{p.nama} ({p.nim})</b><br />
						Lokus: {p.lokus}
					</Tooltip>
					<Popup>
						<b>{p.nama} ({p.nim})</b><br />
						Nomor HP: <a href={"https://wa.me/".concat(p.no_hp)} target="_blank">{p.no_hp}</a><br />
						Lokus: {p.lokus}<br />
						ID Tim: {p.id_tim}<br />
						Posisi: {p.lat}, {p.long}<br />
						Akurasi: {p.akurasi} meter<br />
						diperbarui pada {p.time_created}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default MapComponent;
