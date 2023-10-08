import React, { FC } from "react";
import styles from "./Promo.module.scss";

type TPromo = {
  title: string;
  breakpoints: string[];
};

interface IPromo {
  promo: TPromo;
}

const Promo: FC<IPromo> = ({ promo }) => {
  return (
    <section className={styles.promo}>
      <p className={styles.promo__title}>{promo.title}</p>
      <ul className={styles.promo__list}>
        {promo.breakpoints.map((a, i) => (
          <li className={styles.promo__list__item} key={i}>{a}</li>
        ))}
      </ul>
    </section>
  );
};

export default Promo;
