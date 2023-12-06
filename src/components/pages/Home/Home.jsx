import styles from "./Home.module.css";
import { useState } from "react";

//Import copmponents
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import Store from "../../Organisms/Store/Store";
import Cart from "../../Organisms/Cart/Cart";

//Import personalized hooks
import useApiFetch from "../../../hooks/useApiFetch";
import useFilterByTitle from "../../../hooks/useFilterByTitle";
import useCartListById from "../../../hooks/useCartListById";

function Home() {
  //currentPage state
  const [currentPage, setCurrentPage] = useState("store");

  /*Store*/
  const [data] = useApiFetch("https://fakestoreapi.com/products");

  //  --Search--
  const [filteredItems, searchTerm, handleChangeSearch] =
    useFilterByTitle(data);

  /*Cart*/
  const [cartItems, totalPrice, addToCart, removeToCart] =
    useCartListById(filteredItems);

  return (
    <div className={styles.home}>
      <Header
        numberOfItems={cartItems.length}
        onClickStore={() => setCurrentPage("store")}
        onClickCart={() => setCurrentPage("cart")}
      />

      <>
        {currentPage === "store" && (
          <Store
            items={filteredItems}
            onChangeSearch={(e) => handleChangeSearch(e.target.value)}
            valueSearch={searchTerm}
            onClick={(e) => addToCart(e.target.id)}
          />
        )}

        {currentPage === "cart" && (
          <Cart
            items={cartItems}
            total={totalPrice}
            onClick={(e) => removeToCart(e.target.id)}
          />
        )}
      </>

      <Footer />
    </div>
  );
}

export default Home;
