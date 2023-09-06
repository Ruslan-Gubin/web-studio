"use client";
import { useState } from "react";
import { Dropdown } from "@/shared";
import MapBox from "@/shared/ui/mapbox/MapBox";

import styles from "./ContactMap.module.scss";

type Props = {  
  markers: MarkerType[];
};

const getAddres = (marker: MarkerType) => {
  return `г.${marker.sity}, ул.${marker.street}, ${marker.house}`
}

const getSelectOptions = (items: any[]): OptionsSelectType[] | null => {
  if (items.length === 1) return null;
  return items.map((marker, index) => ({  
    id: index.toString(),
    value: getAddres(marker),
    label: getAddres(marker),
  }));
};

const ContactMap = ({ markers }: Props) => {
  const [options] = useState<OptionsSelectType[] | null>(
    getSelectOptions(markers)
  );
  const [activeAddress, setActiveAddress] = useState<OptionsSelectType | null>(
    options ? options[0] : null
  );

  const handleClickAddress = (marker: OptionsSelectType) => {
    setActiveAddress(marker);
  };
 

  const getMapCenter = (markers: MarkerType[], activeAddress: OptionsSelectType | null): { lat: number, lng: number } => {
    if (activeAddress) {
    return { 
      lat: markers[Number(activeAddress.id)].coordinates.lat,
      lng: markers[Number(activeAddress.id)].coordinates.lng,
      }
    } else {
    return  { lat: markers[0].coordinates.lat, lng: markers[0].coordinates.lng}
    }
  }

  return (
    <>
      {options ? (
        <div className={styles.dropdown_container}>
          <Dropdown
            width={350}
            onSelect={handleClickAddress}
            selected={activeAddress}
            options={options}
          />
        </div>
      ) : (
        <span className={styles.address_list__item}>{getAddres(markers[0])}</span>
      )}
      <MapBox 
      markers={markers}
      size={{ width: "100%", height: 343 }}
      center={getMapCenter(markers, activeAddress)}
      />
    </>
  );
};

export { ContactMap };
