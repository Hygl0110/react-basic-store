import styles from "./Home.module.css";
import { useEffect, useState } from "react";

//Import copmponents
import Header from "../../Organisms/Header/Header";
import Store from "../../Organisms/Store/Store";
import Footer from "../../Organisms/Footer/Footer";
import Cart from "../../Organisms/Cart/Cart";
import Search from "../../Organisms/Search/Search";

//Import personalized hooks
import useApiFetch from "../../../hooks/useApiFetch";

function Home() {
  //currentPage state
  const [currentPage, setCurrentPage] = useState("store");
  const [searchItem, setSearchItem] = useState("");

  /*Store*/

  function hadleSubmitSearch(e) {
    e.preventDefault();
    const [item] = e.target;
    console.log(item);
  }

  function hadleChangeSearch(e) {
    const { value } = e.target;
    setSearchItem(value);
  }

  //tetch items, hook useApiFetch
  const [data, loadind, error] = useApiFetch(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    console.log(data, loadind, error);
  }, [data]);

  return (
    <div className={styles.home}>
      <Header
        onClickStore={() => setCurrentPage("store")}
        onClickSearch={() => setCurrentPage("search")}
        onClickCart={() => setCurrentPage("cart")}
      />

      <>
        {currentPage === "store" && <Store items={data} />}

        {currentPage === "search" && (
          <Search
            onChangeSearch={hadleChangeSearch}
            onSubmitSearch={hadleSubmitSearch}
          />
        )}

        {currentPage === "cart" && <Cart />}
      </>

      <Footer />
    </div>
  );
}

export default Home;
