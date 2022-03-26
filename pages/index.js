import React from "react";
import styles from "../styles/pages/Home.module.css";
import data from "../data/content.json";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>First NextJS project : Blog</h1>
      <br />
      <section className={styles.blocContainer}>
        {data.content.map((item) => (
          <div className={styles.bloc} key={uuidv4()}>
              <h3>{item.title}</h3>
              <h4>{item.excerpt}</h4>
              <p>{item.text}</p>
              <Link href={`${item.path}`}>
                <a>{item.link}</a>
              </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
