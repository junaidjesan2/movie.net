import { NextResponse } from "next/server";
import {Movies} from '../../../Movies'

export async function GET() {
  const dt = Movies;
  return NextResponse.json({ data: dt });
}