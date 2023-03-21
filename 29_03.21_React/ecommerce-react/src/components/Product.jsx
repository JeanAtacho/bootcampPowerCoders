function Product() {
    return <li className="product">
    <div className="product__image-container">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" className="product__image" />
    </div>
    <div className="product__content">
      <header className="product__header">
        <h6 className="product__category">men's clothing</h6>
        <h2 className="product__title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
        <p className="product__price">109.95</p>
        <p className="product__description">Your perfect pack for everyday use and walks in the forest. Stash your laptop
          (up to 15 inches) in the padded sleeve, your everyday</p>
      </header>
      <footer className="product__footer">
        <a href="/#" data-id="1" className="product__like"><i className="icon-heart"></i></a>
        <a href="/#" className="product__add-to-cart">Add to Cart</a>
      </footer>
    </div>
  </li>
}
export default Product