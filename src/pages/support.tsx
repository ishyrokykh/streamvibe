import {Metadata} from "minista";
import Support from "@/sections/Support";
import Questions from "@/sections/Questions";

export const metadata: Metadata  = {
    title: 'Support'
}

export default function () {
    return (
        <>
            <Support />
            <Questions />
        </>
    )
}
