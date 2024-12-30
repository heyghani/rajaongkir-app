"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import Spinner from "@/components/Spinner";
import LocationList from "@/components/LocationList";
import Pagination from "@/components/Pagination";

const Locations = () => {
  const router = useRouter();
  const [provinces, setProvinces] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 10;

  const fetchData = async (page = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/location?page=${page}&limit=${itemsPerPage}&query=${searchQuery}`
      );
      const data = response.data;
      setProvinces(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/auth/signin");
      return;
    }

    fetchData(currentPage, query);
  }, [currentPage, query, router]);

  const handleSearch = () => {
    setCurrentPage(1);
    setQuery(searchTerm);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Provinces</h1>
      <SearchBar
        query={searchTerm}
        onInputChange={(e) => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
      />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LocationList provinces={provinces} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Locations;
