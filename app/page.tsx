"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/auth/signin");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{ backgroundColor: "#fabc05" }}
    >
      <h1 className="text-4xl font-bold mb-6 text-gray-800">RajaOngkir App</h1>
      <p className="mb-8 text-gray-700">
        Your reliable app for exploring provinces and locations in Indonesia.
      </p>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.push("/locations")}
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          Proceed to Locations
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
