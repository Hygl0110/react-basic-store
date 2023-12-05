import InputText from "../../atoms/InputText/InputText";
import Items from "../../molecules/Items/Items";

import styles from "./Store.module.css";

function Store(props) {
  return (
    <div className={styles.Store}>
      <h2>Store</h2>

      <>
        <InputText />
      </>
      <>
        <Items {...props} />
      </>
    </div>
  );
}

export default Store;
