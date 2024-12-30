"use client";
import { useState } from "react";

interface LocationFormProps {
  onSubmit: (cityId: string) => void;
}

const LocationForm = ({ onSubmit }: LocationFormProps) => {
  const [cityId, setCityId] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(cityId);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-2">
      <label htmlFor="city" className="font-medium">
        City ID:
      </label>
      <input
        id="city"
        type="text"
        value={cityId}
        onChange={(e) => setCityId(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-1 px-4 rounded"
      >
        Get City Info
      </button>
    </form>
  );
};

export default LocationForm;
