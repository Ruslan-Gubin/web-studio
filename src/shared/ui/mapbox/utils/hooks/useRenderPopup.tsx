import { Popup } from "react-map-gl";
import type { PopupEvent } from "react-map-gl/dist/esm/types";
import { PopapContent } from "../../popap-content/PopapContent";

export const useRenderPopup = (
  selectedMarker: MarkerType | null,
  outsideClick: ((e: PopupEvent<mapboxgl.Popup>) => void) | undefined
) => {
  if (!selectedMarker) return null;

  const { coordinates, ...otherMarkerProps } = selectedMarker;

  return (
    <Popup
      offset={25}
      latitude={coordinates.lat}
      longitude={coordinates.lng}
      onClose={outsideClick}
      closeButton={false}
    >
      <PopapContent {...otherMarkerProps} />
    </Popup>
  );
};
