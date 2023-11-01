import {NextRequest} from "next/server";
import {searchThesis} from "@/lib/mongodb/thesis";

export async function GET(request: NextRequest) {
    const results = await searchThesis(request.nextUrl.searchParams.get('query') || "");
    console.log("TEST 2")
    return Response.json(results)
}
