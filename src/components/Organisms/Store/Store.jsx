function Store(props) {
  return (
    <div className="Store">
      <h2>All products</h2>
      <div className="products-Container">
        {props.items.map((item, key) => (
          <div className="item" key={key}>
            <img className="item-img" src={item.image} alt="" />
            <p>
              <b>{item.title}</b>
            </p>
            <p>price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
