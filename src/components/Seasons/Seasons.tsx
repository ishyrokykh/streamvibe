import './Seasons.scss';
import AccordionGroup from "@/components/AccordionGroup";
import seasonItems from "@/components/Seasons/seasonItems";
import Accordion from "@/components/Accordion";
import EpisodeCard from "@/components/EpisodeCard";

const Seasons = () => {
    return (
        <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
            {seasonItems.map((seasonItem, index) => (
                <Accordion
                    key={index}
                    subtitle={seasonItem.subtitle}
                    titleLevelClassName="h4"
                    title={seasonItem.title}
                    id={`season-${index}`}
                    name="seasons"
                    isOpen={index === 0}
                    hasArrowButton
                >
                    <ul className="seasons__list">
                        {seasonItem.episodes.map((episode, episodeIndex) => (
                            <li key={episodeIndex} className="seasons__item">
                                <EpisodeCard
                                    key={episodeIndex}
                                    title={episode.title}
                                    description={episode.description}
                                    duration={episode.duration}
                                    video={episode.video}
                                    order={episode.order}
                                />
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </AccordionGroup>
    );
}

export default Seasons