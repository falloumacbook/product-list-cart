import TotalPrice from "./TotalPrice";
import CartItem from "./CartItem";
import iconOrderConfirmed from "../assets/images/icon-order-confirmed.svg";
import { useContext } from "react";
import { CartContext } from "../App";

export default function OrderModal() {
  const { cartItems, setCartItems, isOpenModal, setIsOpenModal } =
    useContext(CartContext);

  const handleButton = () => {
    setCartItems([]);
    setIsOpenModal(false);
  };
  return (
    <>
      {isOpenModal && (
        <div className="modal">
          <div className="modal-content">
            <img className="size-12 mb-8" src={iconOrderConfirmed} alt="" />
            <h2 className="text-4xl">Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div className="bg-rose-50 p-4 my-8">
              <ul
                className={`max-h-48 ${
                  cartItems.length > 2
                    ? "w-[calc(100%+1rem)] overflow-y-scroll pr-2"
                    : ""
                }`}
              >
                {cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    onClick={() => console.log("hello")}
                    confirmOrder={true}
                  />
                ))}
              </ul>
              <TotalPrice />
            </div>
            <button className="btn-primary" onClick={handleButton}>
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}
