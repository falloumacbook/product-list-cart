import { useContext } from "react";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import TotalPrice from "./TotalPrice";
import { removeItemToCart } from "../utils/removeItemToCart";
import { CartContext } from "../App";
import CartItem from "./CartItem";

export default function OrderCart() {
  const { cartItems, setCartItems, setIsOpenModal } = useContext(CartContext);

  const handleItem = (name) => {
    removeItemToCart(name, cartItems, setCartItems);
  };

  return (
    <>
      <ul
        className={`max-h-96 ${
          cartItems.length > 4
            ? "w-[calc(100%+2rem)] overflow-y-scroll pr-2"
            : ""
        }`}
      >
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onClick={() => handleItem(item.name)}
            confirmOrder={false}
          />
        ))}
      </ul>
      <TotalPrice />
      <div className="flex justify-center items-center gap-2 bg-rose-50 p-4 rounded mb-8">
        <img src={iconCarbonNeutral} alt="Icon Carbon Neutral" />
        <p>
          This is <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button className="btn-primary" onClick={() => setIsOpenModal(true)}>
        Confirm Order
      </button>
    </>
  );
}
