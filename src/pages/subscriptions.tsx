import {Metadata} from "minista";
import Plans from "@/sections/Plans";
import PlansComparison from "@/sections/PlansComparison";

export const metadata: Metadata  = {
    title: 'Subscriptions',
}

export default function () {
    return (
        <>
            <Plans />
            <PlansComparison />
        </>
    )
}
