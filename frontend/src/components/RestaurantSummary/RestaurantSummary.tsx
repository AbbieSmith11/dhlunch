import styles from "./RestaurantSummary.module.scss";
import { useState, useEffect } from "react";

type RestaurantSummaryInfo = {
  name: string;
  image: string;
  rating: number;
};

const RestaurantSummary = ({ name, image, rating }: RestaurantSummaryInfo) => {
  // variable for stars
  const [stars, setStars] = useState("⭐️");

  //sets the right amount of stars based on rating (from props) number
  useEffect(() => {
    if (rating == 2) {
      setStars("⭐️⭐️");
    } else if (rating == 3) {
      setStars("⭐️⭐️⭐️");
    } else if (rating == 4) {
      setStars("⭐️⭐️⭐️⭐️");
    } else if (rating >= 5) {
      setStars("⭐️⭐️⭐️⭐️⭐️");
    }
  }, [rating]); //re-render when rating is updated

  // variable for bookmark
  const [bookmark, setBookmark] = useState(false);

  //
  useEffect(() => {
    const saved = localStorage.getItem(`bookmark-${name}`);
    setBookmark(saved === "true");
  }, [name]);

  const handleBookmarkChange = () => {
    setBookmark((prev) => {
      const newValue = !prev;
      localStorage.setItem(`bookmark-${name}`, String(newValue));
      return newValue;
    });
  };

  return (
    <section className={styles.restaurantSummarySection}>
      <div className={styles.RestaurantSummaryContainer}>
        <div className={styles.infoContainers}>
          <img src={image} />
        </div>
        <div className={styles.infoContainers}>
          <h6>{name}</h6>
        </div>
        <div className={styles.infoContainers}>
          <div id={styles.starContainer}>
            <h6>{stars}</h6>
            <h6>{`${rating}.0`}</h6>
          </div>
          <div className={styles.bookmarkButtonContainer}>
            <button
              className={styles.bookmarkButton}
              onClick={handleBookmarkChange}
            >
              {bookmark ? "◉" : "◎"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSummary;
