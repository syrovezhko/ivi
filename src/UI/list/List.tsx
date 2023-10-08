import React from "react";
import styles from "./List.module.scss";

const List = ({ arr }: { arr: string[] }) => {
  return (
    <ul className={styles.list}>
      {arr.map((a, i) => (
        <li className={styles.list__item} key={i}>
          <span className={styles.list__item__circle}></span>
          <span className={styles.list__item__text}>{a}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
