

import { NextResponse } from "next/server";

export function GET()
{
    return NextResponse.json({
        email:"vipulkumar@gmail.com",
        password:"12345"
    })
}