
import { NextResponse } from "next/server";
import { Movies } from "../../../MovieData";

export async function GET(request) {
  return NextResponse.json(Movies)
  }