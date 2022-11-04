// SSD Byul Kim

import "./App.css";
import { useState } from "react";

const shopping = {
  product: "car",
  products: ["car", "tea", "choco"],
  message: "",
  cart: [],
};

function App() {
  const [product, setProduct] = useState(shopping.product);
  const [cart, setCart] = useState(shopping.cart);
  const [message, setMessage] = useState(shopping.message);

  function handleChange(e) {
    const product = e.target.value;
    setProduct(product);
  }

  function addProduct(e) {
    e.preventDefault();
    const newCart = [...cart]; // copying cart to new Cart
    const index = newCart.findIndex((item) => item.product == product);

    if (index == -1) {
      newCart.push({
        product: product,
        quantity: 1,
      }); // don't try to push an item directly to cart
    } else {
      newCart[index].quantity += 1;
    }

    setCart(newCart);

    // Sum
    let sum = 0;
    newCart.map((item) => {
      sum = sum + item.quantity;
    });

    // Message
    let newMessage = `You have ${sum} items now`;
    setMessage(newMessage);
  }

  return (
    <div className="App">
      <main className="App-header">
        <h1>Shopping Cart</h1>
        <section className="products">
          Products:
          <select value={product} onChange={handleChange}>
            {shopping.products.map((product, i) => (
              <>
                <option key={i} value={product}>
                  {product}
                </option>
              </>
            ))}
          </select>
          <button onClick={addProduct}>Add Product</button>
        </section>
        <section className="shopping-list">
          <ul>
            {cart.map((item) => (
              <li>
                {item.product}, {item.quantity}
              </li>
            ))}
          </ul>
          {message}
        </section>
      </main>
    </div>
  );
}

export default App;
