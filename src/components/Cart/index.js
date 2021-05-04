import "./style.cart.scss";
import Counter from "../Counter/index";

const Cart = ({ cartLines }) => {
  const subTotal = () => {
    if (cartLines.length > 1) {
      const prices = cartLines.map((line) => Number(line.price));
      const sum = prices.reduce((acc, curr) => (acc += curr));
      return sum;
    } else {
      return Number(cartLines[0].price);
    }
  };

  const Total = (shippingFee) => {
    return subTotal() + shippingFee;
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
            <span className="cart-line-price">{line.price} €</span>
          </div>
        );
      })}

      <div className="sub-total">
        <div className="sub-total--sum">
          <span>Sous-total</span>
          <span>{subTotal}</span>
        </div>
        <span>Frais de livraison</span>
      </div>

      <div className="total">
        <span>Total</span>
        <span>{shippingFee}</span>
      </div>
    </div>
  );
};

export default Cart;
