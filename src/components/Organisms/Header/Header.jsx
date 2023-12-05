import styles from "./Header.module.css";
import Nav from "../../molecules/Nav/Nav";

function Header(props) {
  return (
    <div className={styles.header}>
      <h1>React Basic Store</h1>
      <Nav {...props} />
    </div>
  );
}

export default Header;
