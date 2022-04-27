import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
// SVG IMPORTS
import  PhilosophySvg from "../assests/Philosophy.svg";
import  PoliticsSvg  from "../assests/Politics.svg";
import  HumorSvg  from "../assests/Humour.svg";
import  FictionSvg  from "../assests/Fiction.svg";
import  DramaSvg  from "../assests/drama.svg";
import  AdventureSvg  from "../assests/Adventure.svg";
import HistorySvg from"../assests/History.svg"
import NextSvg  from "../assests/Next.svg";
import GenerCard from "../components/GenerCard";

const Main = () => {
  return (
    <div className="container">
  
      <h1 className="maincolor">Gutenberg Project</h1>
      <p>
        A social cataloging website that allows you to freely search its
        database of books, annotations, and reviews.
      </p>

      <div className={styles.linkwrapper}>
        <Link className={styles.link + " maincolor"} to="/adventure">
        <GenerCard svgLink={AdventureSvg} next={NextSvg} title="Adventure"/>
        </Link>

        <Link className={styles.link} to="/drama">
        <GenerCard svgLink={DramaSvg} next={NextSvg} title="Drama"/>
        </Link>

        <Link className={styles.link} to="/fiction">
        <GenerCard svgLink={FictionSvg} next={NextSvg} title="Fiction"/>
        </Link>

        <Link className={styles.link} to="/history">
           <GenerCard svgLink={HistorySvg} next={NextSvg} title="History"/>
        </Link>

        <Link className={styles.link} to="/philosophy">
        <GenerCard svgLink={PhilosophySvg} next={NextSvg} title="philosophy"/>
        </Link>

        <Link className={styles.link} to="/politics">
        <GenerCard svgLink={PoliticsSvg} next={NextSvg} title="politics"/>
        </Link>

        <Link className={styles.link} to="/humor">
        <GenerCard svgLink={HumorSvg} next={NextSvg} title="humor"/>
        </Link>
      </div>
    </div>
  );
};

export default Main;
