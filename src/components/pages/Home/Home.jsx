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

function Home() {
  //currentPage state
  const [currentPage, setCurrentPage] = useState("store");

  /*Store*/
  const [data] = useApiFetch("https://fakestoreapi.com/products");

  //Search
  const [filteredItems, searchTerm, handleChangeSearch] =
    useFilterByTitle(data);

  return (
    <div className={styles.home}>
      <Header
        onClickStore={() => setCurrentPage("store")}
        onClickCart={() => setCurrentPage("cart")}
      />

      <>
        {currentPage === "store" && (
          <Store
            items={filteredItems}
            onChangeSearch={(e) => handleChangeSearch(e.target.value)}
            valueSearch={searchTerm}
          />
        )}

        {currentPage === "cart" && <Cart />}
      </>

      <Footer />
    </div>
  );
}

export default Home;
