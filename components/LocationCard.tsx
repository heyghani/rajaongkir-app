interface LocationCardProps {
  name: string;
}

const LocationCard = ({ name }: LocationCardProps) => (
  <div className="border border-[#fabc05] bg-white p-4 rounded-md shadow-sm mb-2">
    <h2 className="text-lg font-bold text-gray-800">{name}</h2>
  </div>
);

export default LocationCard;
