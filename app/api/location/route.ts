/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const query = searchParams.get("query") || "";

    const response = await axios.get(
      `https://api.rajaongkir.com/starter/province`,
      {
        headers: { key: process.env.NEXT_PUBLIC_RAJAONGKIR_API_KEY },
      }
    );

    const provinces = response.data.rajaongkir.results;

    const filtered = provinces.filter((province: any) =>
      province.province.toLowerCase().includes(query.toLowerCase())
    );
    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      data: paginated,
      total: filtered.length,
      page,
      totalPages: Math.ceil(filtered.length / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data from RajaOngkir" });
  }
}
