import { NextResponse } from "next/server";

// mock menu data
const menu = {
  data: [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Work", url: "/works" },
    { id: 3, title: "Blog", url: "/blog" }, 
  ],
};

// handle GET request
export async function GET() {
  return NextResponse.json(menu);
}
