import { useContext } from "react";
import { CartContext } from "../App";
import EmptyCart from "./EmptyCart";
import OrderCart from "./OrderCart";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  return (
    <>
      <div className="bg-white p-8 h-fit rounded-lg">
        <h2 className="text-primary">Your Cart ({itemCount})</h2>
        {itemCount <= 0 ? <EmptyCart /> : <OrderCart />}
      </div>
    </>
  );
}
