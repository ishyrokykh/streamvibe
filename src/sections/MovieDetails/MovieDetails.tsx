import './MovieDetails.scss';
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import PersonCard from "@/components/PersonCard";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import Ratings from "@/components/Ratings";
import {ReactNode} from "react";

type TMovieDetailsProps = {
    seasons?: ReactNode;
}

const MovieDetails = ({seasons}: TMovieDetailsProps) => {
    const titleId = 'movie-details-title';
    const castSliderNavigationId = 'movie-cast-slider-navigation';

    const castItems = [
        {
            imgSrc: '/src/assets/images/people/1.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/2.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/3.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/4.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/5.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/6.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/7.jpg',
            imgAlt: "Ivan Ivanov"
        },
        {
            imgSrc: '/src/assets/images/people/8.jpg',
            imgAlt: "Ivan Ivanov"
        }
    ];

    const reviewItems = [
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From India',
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
            ratingValue: 4.5,
        }
    ];

    return (
        <section className='movie-details container' aria-labelledby={titleId}>
            <h2 className="visually-hidden" id={titleId}>Detailed movie information</h2>
            <div className="movie-details__main">
                {seasons && <div className="movie-details__panel movie-details__panel--seasons">
                    <div className="movie-details__group movie-details__group--big-gap-y">
                        <h3 className="h4">Seasons and Episodes</h3>
                        {seasons}
                    </div>
                </div>}
                <div className="movie-details__panel movie-details__panel--description">
                    <div className="movie-details__group">
                        <h3 className="movie-details__title">Description</h3>
                        <div className="movie-details__description">
                            <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
                        </div>
                    </div>
                </div>
                <div className="movie-details__panel">
                    <header className="movie-details__panel-header">
                        <h3 className="movie-details__title">Cast</h3>
                        <SliderNavigation
                            id={castSliderNavigationId}
                            withPagination={false}
                            buttonMode="black-08"
                            mode="rounded"
                        />
                    </header>
                    <Slider
                        navigationTargetElementId={castSliderNavigationId}
                        hasScrollbarOnMobile={false}
                        sliderProps={{
                            slidesPerView: 'auto',
                            spaceBetween: 10,
                            breakpoints: {
                                1024: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 20,
                                    allowTouchMove: false
                                }
                            }
                        }}
                    >
                        {castItems.map((castItem, index) => (
                            <PersonCard key={index} imgSrc={castItem.imgSrc} imgAlt={castItem.imgAlt} />
                        ))}
                    </Slider>
                </div>
                <div className="movie-details__panel movie-details__panel--large-gap-y">
                    <header className="movie-details__panel-header">
                        <h3 className="movie-details__title">Reviews</h3>
                        <Button mode="black-08" iconBefore="plus" label="Add Your Review" as="a" href="/reviews" isLabelHidden={false} />
                    </header>
                    <Slider navigationMode="rounded" isNavigationHiddenMobile={false} hasScrollbarOnMobile={false} sliderProps={{
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 16
                            },
                            1024: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                allowTouchMove: false,
                                spaceBetween: 20
                            }
                        }
                    }}>
                        {reviewItems.map((reviewItem, index) => (
                            <ReviewCard key={index} name={reviewItem.name} description={reviewItem.description} ratingValue={reviewItem.ratingValue} subtitle={reviewItem.subtitle} />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="movie-details__info">
                <div className="movie-details__panel">
                    <div className="movie-details__groups">
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon iconId="calendar" />
                                <span>Released Year</span>
                            </h3>
                            <div className="movie-details__description">
                                <time className="h6" dateTime="2025">2025</time>
                            </div>
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon iconId="translate" />
                                <span>Available Languages</span>
                            </h3>
                            <Tags items={['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada']} />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon iconId="star" />
                                <span>Ratings</span>
                            </h3>
                            <Ratings items={[
                                {title: "IMDb", ratingValue: 4.5},
                                {title: "Streamvibe", ratingValue: 4}
                            ]} />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon iconId="genres" />
                                <span>Genres</span>
                            </h3>
                            <Tags items={['Action', 'Adventure']} />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                Director
                            </h3>
                            <PersonCard imgSrc="/src/assets/images/people/director.jpg" name="Rishab Shetty" subtitle="From India" imgAlt="Rishab Shetty" />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                Music
                            </h3>
                            <PersonCard imgSrc="/src/assets/images/people/sound_producer.jpg" name="B. Ajaneesh Loknath" subtitle="Sound" imgAlt="B. Ajaneesh Loknath" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails