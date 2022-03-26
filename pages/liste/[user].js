import React from "react";

export default function User(props) {
  return (
    <>
      <h1>User</h1>
      <ul>
        <li>Name: {props.user.name}</li>
        <li>Username: {props.user.username}</li>
        <li>Email: {props.user.email}</li>
        <li>Phone: {props.user.phone}</li>
        <li>Website: {props.user.website}</li>
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.user;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((user) => ({
    params: { user: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

