import "./style.cart.scss";
import Counter from "../Counter/index";
import { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, setCart }) => {
  const subTotal = () => {
    const mealSum = cart.map((meal) => parseFloat(meal.price) * meal.quantity);
    const sum = parseFloat(mealSum.reduce((acc, curr) => acc + curr));
    return sum.toFixed(2);
  };

  const total = (shippingFee) => {
    const sum = parseFloat(subTotal()) + shippingFee;
    return sum.toFixed(2);
  };

  const shippingFee = 2.5;

  return cart.length <= 0 ? (
    <div className="cart">
      <div className="cart-container">
        <button className="cart-cta--disabled">Valider mon panier</button>
        <p className="cart-text">Votre panier est vide</p>
      </div>
    </div>
  ) : (
    <div className="cart">
      <div className="cart-container">
        <button className="cart-cta">Valider mon panier</button>
        {cart.map((meal) => {
          return (
            <div key={meal.id} className="cart-line">
              <div className="cart-line-counter">
                <Counter cart={cart} setCart={setCart} meal={meal} />
                <span className="cart-line-counter--title">{meal.title}</span>
              </div>
              <span className="cart-line-price">
                {meal.price.replace(".", ",")} €
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
    </div>
  );
};

export default Cart;
