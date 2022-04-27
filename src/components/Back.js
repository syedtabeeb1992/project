import React from "react";
import { Link } from "react-router-dom";

import styles from "./Back.module.css"
import backSvg from "../assests/Back.svg";

const Back = (props) => {


  return (
    <div className={styles.backwrapper}>
      <Link to="/">

        <img src={backSvg} alt="image" />
      </Link>

      <h2 className={styles.backtext}> {props.title} </h2>
    </div>
  );
};

export default Back;
