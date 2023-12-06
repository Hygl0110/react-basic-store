import styles from "./Nav.module.css";
import Button from "../../atoms/Button/Button";

function Nav(props) {
  return (
    <div className={styles.nav}>
      <Button
        text="Store"
        onClick={props.onClickStore}
        className={styles.button}
      />
      <Button
        text={`Cart ( ${props.numberOfItems} )`}
        onClick={props.onClickCart}
        className={styles.button}
      />
    </div>
  );
}

export default Nav;
