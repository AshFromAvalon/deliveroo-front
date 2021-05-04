import "./style.cart.scss";
import Counter from "../Counter/index";

const Cart = ({ cartLines }) => {
  const subTotal = () => {
    if (cartLines.length > 1) {
      const prices = cartLines.map((line) => parseFloat(line.price));
      const sum = prices.reduce((acc, curr) => (acc += curr));
      return sum.toFixed(2).replace(".", ",");
    } else {
      return parseFloat(cartLines[0].price).toFixed(2).replace(".", ",");
    }
  };

  const total = (shippingFee) => {
    const sum = subTotal() + shippingFee;
    return parseFloat(sum).toFixed(2).replace(".", ",");
  };

  const shippingFee = 2.5;

  return cartLines.length <= 0 ? (
    <div className="cart">
      <button className="cart-cta--disabled">Valider mon panier</button>
      <p className="cart-text">Votre panier est vide</p>
    </div>
  ) : (
    <div className="cart">
      <button className="cart-cta">Valider mon panier</button>
      {cartLines.map((line) => {
        return (
          <div key={line.id} className="cart-line">
            <div className="cart-line-counter">
              <Counter cartLines={cartLines} />
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
          <span>{subTotal()} €</span>
        </div>
        <div className="cart-sub-total--fee">
          <span>Frais de livraison</span>
          <span>{shippingFee.toFixed(2).replace(".", ",")} €</span>
        </div>
      </div>

      <div className="cart-total">
        <span>Total</span>
        <span>{total(shippingFee)} €</span>
      </div>
    </div>
  );
};

export default Cart;
