// import styles from "./MyRestaurants.module.scss";
import { useState, useEffect } from "react";

const MyRestaurants: React.FC = () => {
  const [bookmarkedRestaurants, setBookmarkedRestaruants] = useState<string[]>(
    []
  );

  useEffect(() => {
    const bookmarks: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      if (key.startsWith("bookmark-")) {
        const value = localStorage.getItem(key);
        if (value === "true") {
          const name = key.replace("bookmark-", "");
          bookmarks.push(name);
        }
      }
    }
    setBookmarkedRestaruants(bookmarks);
  }, []);

  return (
    <section>
      {bookmarkedRestaurants.length === 0 ? (
        <p>You haven't saved any restaurants yet!</p>
      ) : (
        <ul>
          {bookmarkedRestaurants.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MyRestaurants;
