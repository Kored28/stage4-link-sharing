import { NextRequest, NextResponse } from "next/server";

export type Item = {
    id: number,
    icon: string,
    platform: string,
    link: string,
}

const defaultItem: Item[] = [
    { id:1, icon: "fa-brands fa-github", platform: "Github", link: "https://github.com" },
    { id:1, icon: "fa-brands fa-twitter", platform: "Twitter", link: "https://github.com" },
    { id:1, icon: "fa-brands fa-youtube", platform: "Youtube", link: "https://github.com" },
    { id:1, icon: "fa-brands fa-facebook", platform: "Facebook", link: "https://github.com" },
    { id:1, icon: "fa-brands fa-github", platform: "Github", link: "https://github.com" }
]

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(defaultItem)
    } catch (error) {
        return new NextResponse("Internal Error", {status: 500})
    }
}