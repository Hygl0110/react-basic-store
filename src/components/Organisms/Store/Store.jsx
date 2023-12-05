import Button from "../../atoms/Button/Button";
import SearchForm from "../../molecules/SearchForm/SearchForm";
import styles from "./Store.module.css";

function Store(props) {
  return (
    <div className={styles.Store}>
      <h2>Store</h2>
      <SearchForm />
      <div className={styles.productsContainer}>
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

            <Button text="Add to cart" onClick={props.onClickItemButton} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
