type Email = string;
type UniqueId = string;
type DateTimeString = string;
type PriceCents = number;

type Marker = { lat: number, lon: number, name: string }

type OptionsSelectType = {
  id: string;
  value: string;
  label: string;
};

type MarkerType = {
  coordinates: { lng: number, lat: number }
  company_name?: string;
  phone?: string[];
  sity?: string;
  street?: string;
  house?: string;
  email?: string;
}