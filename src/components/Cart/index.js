import "./style.cart.scss";
import Counter from "../Counter/index";
import { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartLines, setCartLines }) => {
  const subTotal = () => {
    if (cartLines.length > 1) {
      const prices = cartLines.map((line) => parseFloat(line.price));
      const sum = prices.reduce((acc, curr) => (acc += curr));
      return parseFloat(sum).toFixed(2);
    } else {
      return parseFloat(cartLines[0].price).toFixed(2);
    }
  };

  const total = (shippingFee) => {
    const sum = parseFloat(subTotal()) + shippingFee;
    return sum.toFixed(2);
  };

  const shippingFee = 2.5;

  const uniqueCartLines = cartLines.filter(
    (line, index) => cartLines.indexOf(line) === index
  );

  return cartLines.length <= 0 ? (
    <div className="cart">
      <button className="cart-cta--disabled">Valider mon panier</button>
      <p className="cart-text">Votre panier est vide</p>
    </div>
  ) : (
    <div className="cart">
      <button className="cart-cta">Valider mon panier</button>
      {uniqueCartLines.map((line) => {
        return (
          <div key={line.id} className="cart-line">
            <div className="cart-line-counter">
              <Counter
                cartLines={cartLines}
                setCartLines={setCartLines}
                line={line}
              />
              <span className="cart-line-counter--title">{line.title}</span>
            </div>
            <span className="cart-line-price">
              {line.price.replace(".", ",")} €
            </span>
          </div>
        );
      })}

      <div className="cart-sub-total">
        <div className="cart-sub-total--sum">
          <span>Sous-total</span>
          <span>{subTotal().replace(".", ",")} €</span>
        </div>
        <div className="cart-sub-total--fee">
          <span>Frais de livraison</span>
          <span>{shippingFee.toFixed(2).replace(".", ",")} €</span>
        </div>
      </div>

      <div className="cart-total">
        <span>Total</span>
        <span>{total(shippingFee).replace(".", ",")} €</span>
      </div>
    </div>
  );
};

export default Cart;
