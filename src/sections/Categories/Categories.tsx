import './Categories.scss';
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

import categoryItems from './categoryItems';

const Categories = () => {

    const sliderNavigationId = "categories-slider-navigation";

    return (
        <Section
            titleId="Categories"
            title="Explore our wide variety of categories"
            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            actions={
                <SliderNavigation
                    id={sliderNavigationId}
                    mode="tile"
                />
            }
            hideActionsOnMobile
        >
            <Slider navigationTargetElementId={sliderNavigationId} isEdgeBeyondTheViewportOnMobile>
                {categoryItems.map((item, index) => (
                    <CategoryCard key={index} title={item.title} images={item.images} />
                ))}
            </Slider>
        </Section>
    );
}

export default Categories