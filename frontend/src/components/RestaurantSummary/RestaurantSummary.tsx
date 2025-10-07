import styles from "./RestaurantSummary.module.scss";

type RestaurantSummaryInfo = {
    name: string;
    image: string;
    rating: number;
}

const RestaurantSummary = ({name, image, rating}: RestaurantSummaryInfo) => {
    return (
        <div className={styles.RestaurantSummaryContainer}>
            <div className={styles.infoContainers}><img src={image}/></div>
            <div className={styles.infoContainers}>{name}</div>
            <div className={styles.infoContainers}>{rating}</div>
        </div>
    )
}

export default RestaurantSummary;