"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import Map, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  MapRef,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { MarkerEvent } from "react-map-gl/dist/esm/types";
import { useRenderMarkers, useRenderPopup } from "./utils";


interface MapLang extends MapRef {
  setLanguage: (value: string) => void;
}

type Props = {
  center?: { lat: number; lng: number };
  markers: MarkerType[];
  size: { width: number | string; height: number | string };
  zoom?: number;
  mapConfig: { token: string, style: string }
};

const MapBox = ({ size, zoom, markers, center, mapConfig }: Props) => {
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const mapRef = useRef<MapLang | null>(null);

  const markersComponent = useRenderMarkers(markers, zoomToSelectedLoc)
  const popupComponent = useRenderPopup(selectedMarker, () => setSelectedMarker(null))

  const initCenter = useMemo(() => {
    return center
      ? center
      : { lat: markers[0].coordinates.lat, lng: markers[0].coordinates.lng };
  }, [center, markers]);

  const initialViewState = {
    latitude: initCenter.lat,
    longitude: initCenter.lng,
    zoom: zoom ? zoom : 14,
    language: 'ru',
  };

  function handleflyToMarker( lng: number, lat: number) {
    if (!mapRef.current) return;
    mapRef.current.flyTo({ center: [lng, lat], zoom: 14 });
  }

  function zoomToSelectedLoc(e: MarkerEvent<mapboxgl.Marker, MouseEvent>) {
    if (!mapRef.current) return;
    e.originalEvent.stopPropagation();

    const { lat, lng } = e.target.getLngLat();

    const currentMarker = markers.find(
      (marker) =>
        marker.coordinates.lat === lat && marker.coordinates.lng === lng
    );

    if (!currentMarker) return;

    setSelectedMarker(currentMarker);
    handleflyToMarker(lng, lat)
  };


  useEffect(() => {
    if (!mapRef.current) return;
    setSelectedMarker(() => null)
    handleflyToMarker(initCenter.lng, initCenter.lat)
  }, [initCenter]);


  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapConfig.token}
      mapStyle={mapConfig.style}
      style={{...size, zIndex: 0}}
      initialViewState={initialViewState}
      maxZoom={40}
      minZoom={3}
    >
      <GeolocateControl  position="top-left" />
      <NavigationControl position="top-left" />
      <FullscreenControl position="top-right" />
      {markersComponent}
      {popupComponent}
    </Map>
  );
};

export default MapBox;
