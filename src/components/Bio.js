import React from "react";
import styles from "./Bio.module.css";
import meImg from "../img/me.jpg";

function Bio(props) {
  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <a href="https://instagram.com/endernet.design/">
        <img src={meImg} alt="Me" />
      </a>
      <p>
        A site for <a href="https://endernet.design">Endernet</a> to entertain
        and inform.
        <br />
        But mostly for my sanity.
      </p>
    </div>
  );
}

export default Bio;
