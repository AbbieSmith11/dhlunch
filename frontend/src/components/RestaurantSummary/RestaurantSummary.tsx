import styles from "./RestaurantSummary.module.scss";
import { useState, useEffect} from "react";

type RestaurantSummaryInfo = {
    name: string;
    image: string;
    rating: number;
}

const RestaurantSummary = ({name, image, rating}: RestaurantSummaryInfo) => {

    // variable for stars
    const [stars, setStars] = useState("⭐️");

    //sets the right amount of stars based on rating (from props) number 
    useEffect(() => {
        if(rating == 2){
            setStars("⭐️⭐️");
        }
        else if (rating == 3){
            setStars("⭐️⭐️⭐️");
        }
        else if (rating == 4){
            setStars("⭐️⭐️⭐️⭐️")
        }
        else if (rating >= 5){
            setStars("⭐️⭐️⭐️⭐️⭐️");
        }
    },[rating]);//re-render when rating is updated


    return (
        <div className={styles.RestaurantSummaryContainer}>
            <div className={styles.infoContainers}><img src={image}/></div>
            <div className={styles.infoContainers}>{name}</div>
            <div className={styles.infoContainers}>{stars}</div>
        </div>
    )
}

export default RestaurantSummary;