"use client";
import "./globals.css";
import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/auth/signin");
    }
    setLoading(false);
  }, [router]);

  return { isAuthenticated, loading };
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { loading } = useAuth();

  return (
    <html lang="en">
      <body
        className="min-h-screen"
        style={{ backgroundColor: "#fabc05", color: "#2d3748" }}
      >
        {loading && (
          <div className="flex items-center justify-center min-h-screen">
            <Spinner />
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
