import Button from "../../atoms/Button/Button";
import styles from "./Items.module.css";

import React from "react";

function Items(props) {
  return (
    <div className={styles.itemsContainer}>
      {props.items.map((item, key) => (
        <div className={styles.product} key={key}>
          <img
            className={styles.itemImg}
            src={item.image}
            title={item.title}
            alt={item.title}
          />

          <p>
            <b>{item.title}</b>
          </p>

          <p>price: ${item.price}</p>

          <Button {...props} />
        </div>
      ))}
    </div>
  );
}

export default Items;
