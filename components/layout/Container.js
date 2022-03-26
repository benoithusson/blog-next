import React from "react";
import Navbar from "../layout/Navbar/Navbar";

export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
