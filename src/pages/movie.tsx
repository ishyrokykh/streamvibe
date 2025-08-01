import {Metadata} from "minista";
import MovieBanner from "@/sections/MovieBanner";
import MovieDetails from "@/sections/MovieDetails";

export const metadata: Metadata  = {
    title: 'Movie - Kantara'
}

export default function () {
    return (
        <>
        <MovieBanner />
        <MovieDetails />
        </>
    )
}
