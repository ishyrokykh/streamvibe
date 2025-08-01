import {Metadata} from "minista";
import MoviesBanner from "@/sections/MoviesBanner";
import Collections from "@/sections/Collections";

export const metadata: Metadata  = {
    title: 'Movies & Shows'
}

export default function () {
    return (
        <>
        <MoviesBanner />
        <Collections />
        </>
    )
}
