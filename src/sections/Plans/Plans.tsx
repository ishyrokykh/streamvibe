import './Plans.scss';
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import planGroups from "./planGroups";
import PlanCard from "@/components/PlanCard";
import TabsNavigation from "@/components/Tabs/components/TabsNavigation";
import Tabs from "@/components/Tabs";

const Plans = () => {
    const tabsTitle = 'plans-tabs';
    const tabsNavigationId = 'plans-tabs-navigation';

    return (
        <Section
            title="Choose the plan that's right for you"
            titleId="plans-title"
            description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            actions={<TabsNavigation id={tabsNavigationId} title={tabsTitle} items={planGroups} /> }
        >
            <Tabs
                title={tabsTitle}
                navigationTargetElementId={tabsNavigationId}
                items={planGroups.map(planGroup => ({
                    title: planGroup.title,
                    isActive: planGroup.isActive,
                    children: <Grid columns={3}>
                        {planGroup.items.map((item, index) => (
                            <PlanCard key={index} title={item.title} description={item.description} price={item.price} period={item.period} />
                        ))}
                    </Grid>
                }))}
            />
        </Section>
    );
}

export default Plans;