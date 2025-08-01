import './CategoryCard.scss';
import {Image} from "minista";
import Icon from "@/components/Icon";
import Badge from "@/components/Badge";

type TCategoryCardProps = {
    title?: string;
    images?: string[];
    badge?: string;
}

const CategoryCard = ({title, images, badge}: TCategoryCardProps) => {
    return (
        <a className="category-card" href="/movies">
            <div className="category-card__images">
                {images?.map((src, index) => (
                    <Image key={index} className="category-card__image" src={src}  />
                ))}
            </div>
            <div className="category-card__body">
                <h3 className="category-card__title">
                    {badge && <Badge
                        className="category-card__badge"
                        isBig
                        mode="accent"
                    >
                        {badge}
                    </Badge>}
                    <span>{title}</span>
                </h3>
                <Icon className="category-card__icon" iconId="arrow-right" />
            </div>
        </a>
    );
}

export default CategoryCard