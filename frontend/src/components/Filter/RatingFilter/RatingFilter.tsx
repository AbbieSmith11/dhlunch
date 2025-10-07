import styles from "./RatingFilter.module.scss"

const RatingFilter = () => {

    return (
        <div className={styles.ratingContainer}>
        <h3 className={styles.rating}>Rating</h3>
        <ul className="styles.ratingList">
        <li>1+</li>
        <li>2+</li>
        <li>3+</li>
        <li>4+</li>
        <li>5</li>
        </ul>
        </div>
    )
    
    
}

export default RatingFilter;