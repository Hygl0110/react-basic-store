import Button from "../../atoms/Button/Button";
import styles from "./Items.module.css";

function Items(props) {
  //items array
  const items = props.items;

  return (
    <div className={styles.itemsContainer}>
      {items.length === 0 ? (
        <>
          <h3>Not items</h3>
        </>
      ) : (
        <>
          {items.map((item, key) => (
            <div className={styles.product} key={key}>
              <>
                <img
                  className={styles.itemImg}
                  src={item.image}
                  title={item.title}
                  alt={item.title}
                />
              </>
              <>
                <p>
                  <b>{item.title}</b>
                  <br />
                  <br />
                  {item.description}
                  <br />
                  <br />
                  price: ${item.price}
                </p>
                <Button id={key} {...props} />
              </>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Items;
