import LocationCard from "./LocationCard";

interface LocationListProps {
  provinces: { province: string }[];
}

const LocationList = ({ provinces }: LocationListProps) => (
  <div className="w-full max-w-md">
    {provinces.map((province, index) => (
      <LocationCard key={index} name={province.province} />
    ))}
  </div>
);

export default LocationList;
