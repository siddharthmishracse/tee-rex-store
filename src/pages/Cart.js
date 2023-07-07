import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const Cart = ({ cartItems, quantityIncrement, quantityDecrement, removeCartItem }) => {
 let totalAmount = cartItems.reduce((a, c) => a + c.price * c.quant, 0);

  return (
    <div>
    
      {cartItems.length > 0 ? (
        <>
          <div className="">
            <div className="mapitems">
              {cartItems.map((item) => {
                return <CartItem key={item.id} item={item} quantityDecrement={quantityDecrement} quantityIncrement={quantityIncrement} removeCartItem={removeCartItem}  />;
              })}
            </div>
            <div>
              <div className="overall">
                <h1 className="summary">
                  YOUR CART SUMMARY
                </h1>
                <p>
                  {" "}
                  <span className="amount">
                    Total Amount
                  </span>{" "}
                  : Rs. {totalAmount}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="empty">
            <h1 className="header">
              Your cart is empty!
            </h1>
            <Link to={"/"}>
              <button className="">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
