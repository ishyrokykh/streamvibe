import './Collections.scss';
import Tabs from "@/components/Tabs";
import collectionGroups from "./collectionGroups";
import getIdFromTitle from "@/utils/getIdFromTitle";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";
import MovieCard from "@/components/MovieCard";

const Collections = () => {
    return (
        <Tabs
            className="collections container"
            title="collections"
            items={collectionGroups.map(collectionGroup => ({
                isActive: collectionGroup.isActive,
                title: collectionGroup.title,
                children: <div className="collections__group">
                    <p className="collections__title hidden-mobile">
                        {collectionGroup.title}
                    </p>
                    {collectionGroup.items.map((collectionItem, index) => {
                        const {title, categoryItems, movieItems, sliderParams} = collectionItem;

                        const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
                        const titleId = `${titleFormatted}-title`;
                        const sliderNavigationId = `${titleFormatted}-slider-navigation`;

                        return <Section
                            key={index}
                            className="collections__section"
                            title={title}
                            titleId={titleId}
                            actions={
                                <SliderNavigation
                                    id={sliderNavigationId}
                                    mode="tile"
                                />
                            }
                            hideActionsOnMobile
                        >
                            <Slider
                                sliderProps={sliderParams}
                                navigationTargetElementId={sliderNavigationId}
                                isEdgeBeyondTheViewportOnMobile
                            >
                                {categoryItems?.map((categoryItem, categoryItemIndex) =>
                                    <CategoryCard key={categoryItemIndex} badge={categoryItem.badge} title={categoryItem.title} images={categoryItem.images} />
                                ) ?? movieItems?.map((movieItem, movieItemIndex) =>
                                    <MovieCard key={movieItemIndex} href={movieItem.href} season={movieItem.season} rating={movieItem.rating} title={movieItem.title} released={movieItem.released} imgSrc={movieItem.imgSrc} views={movieItem.views} duration={movieItem.duration} />
                                )}
                            </Slider>
                        </Section>;
                    })}
                </div>
            }))}
            isEnabledOnlyOnMobile
        />
    );
}

export default Collections