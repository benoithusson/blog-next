import React from "react";
import styles from "../../styles/pages/PostsList.module.css";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Blog(props) {
  return (
    <div className={styles.blogPage}>
      <h1>Bienvenue sur le blog</h1>
      <br />
      <div className={styles.blogContainer}>
        {props.posts.map((post) => (
          <Link href={`/blog/${post.id.toString()}`} key={uuidv4()}>
            <a>
              <div className={styles.postContainer}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Lire cet article</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}
