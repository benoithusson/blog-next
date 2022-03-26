import React from "react";
import styles from "../../styles/pages/Post.module.css";
import Head from "next/head";
import {useRouter } from 'next/router';

export default function Article(props) {
  const { title, body } = props.post;
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.post}</title>
      </Head>
      <div className={styles.postContainer}>
        <h1>Article</h1>
        <p>Titre : {title}</p>
        <p>{body}</p>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.post;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  const paths = posts.map((item) => ({
    params: { post: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
