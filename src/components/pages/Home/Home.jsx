import styles from "./Home.module.css";
import { useEffect, useState } from "react";

//Import copmponents
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import Store from "../../Organisms/Store/Store";
import Cart from "../../Organisms/Cart/Cart";

//Import personalized hooks
import useApiFetch from "../../../hooks/useApiFetch";

function Home() {
  //currentPage state
  const [currentPage, setCurrentPage] = useState("store");

  /*Store*/
  const [items, loadind, error] = useApiFetch(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    console.log(items, loadind, error);
  }, [items, loadind, error]);

  return (
    <div className={styles.home}>
      <Header
        onClickStore={() => setCurrentPage("store")}
        onClickCart={() => setCurrentPage("cart")}
      />

      <>
        {currentPage === "store" && <Store items={items} />}

        {currentPage === "cart" && <Cart />}
      </>

      <Footer />
    </div>
  );
}

export default Home;
