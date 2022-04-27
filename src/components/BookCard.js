import React from "react";
import styles from "./BookCard.module.css";
const BookCard = (props) => {
  return (
    <a href={props.links} target="_blank" className={styles.bookCard}>
      <div className={styles.bookimg}>   </div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.auther}> {props.auther} </p>
    </a>
  );
};

export default BookCard;
