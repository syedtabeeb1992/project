import React from "react";
import styles from "./gener.module.css";
const GenerCard = (props) => {
  return (
    <>
      <div className={styles.svgimg}>
        <img src={props.svgLink} />
      </div>
      <div> {props.title}</div>
      <div className={styles.next}>
        <img src={props.next} alt="image" />
      </div>
    </>
  );
};

export default GenerCard;
