import "./style.cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <button className="cart-cta--disabled">Valider mon panier</button>
      <p className="cart-text">Votre panier est vide</p>
    </div>
  );
};

export default Cart;
