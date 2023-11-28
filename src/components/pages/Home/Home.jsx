import React, { useEffect, useState } from "react";
import Header from "../../Organisms/Header/Header";
import Store from "../../Organisms/Store/Store";
import Footer from "../../Organisms/Footer/Footer";
import Cart from "../../Organisms/Cart/Cart";
import Search from "../../Organisms/Search/Search";

function Home() {
  //currentPage state
  const [currentPage, setCurrentPage] = useState("store");
  const [items, setItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  /*Store*/
  //tetch items
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  function hadleSubmitSearch(e) {
    e.preventDefault();
    const [item] = e.target;
    console.log(item);
  }

  function hadleChangeSearch(e) {
    const { value } = e.target;
    setSearchItem(value);
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="home">
      <Header
        onClickStore={() => setCurrentPage("store")}
        onClickSearch={() => setCurrentPage("search")}
        onClickCart={() => setCurrentPage("cart")}
      />

      {currentPage === "store" && <Store items={items} />}

      {currentPage === "search" && (
        <Search
          onChangeSearch={hadleChangeSearch}
          onSubmitSearch={hadleSubmitSearch}
        />
      )}

      {currentPage === "cart" && <Cart />}
      <Footer />
    </div>
  );
}

export default Home;
