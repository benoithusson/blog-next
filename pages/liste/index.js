import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/pages/UsersList.module.css";

export default function Liste(props) {
  return (
    <div className={styles.tableContainer}>
      <h1>Liste utilisateurs</h1>
      <table className={styles.table}>
        <thead>
          {props.user.map((user) => (
            <tr className={styles.cellUserName} key={uuidv4()}>
              <td>{user.name}</td>
              <td>
                <Link href={`/liste/${user.id.toString()}`}>
                  <a>Contacter</a>
                </Link>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}
