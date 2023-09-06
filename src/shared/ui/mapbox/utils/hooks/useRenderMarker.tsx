import { Marker } from "react-map-gl";
import type { MarkerEvent } from "react-map-gl/dist/esm/types";
import { CustomMarker } from "../../map-marker/CustomMarker";

export const useRenderMarkers = (markers: MarkerType[], handleMarkerClick: (e: MarkerEvent<mapboxgl.Marker, MouseEvent> ) => void) => {
  return markers.map((marker, index) => (
    <Marker
      key={index}
      longitude={Number(marker.coordinates.lng)}
      latitude={Number(marker.coordinates.lat)}
      onClick={handleMarkerClick}
    >
      <CustomMarker number={index} />
    </Marker>
  ));
};