import { useContext } from "react";
import { formatPrice } from "../utils/formatPrice";
import { CartContext } from "../App";

export default function TotalPrice() {
  const { cartItems } = useContext(CartContext);

  const calculateTotalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  return (
    <div className="flex justify-between items-center gap-4 py-8">
      <p>Order Total</p>
      <p className="text-4xl font-bold">${formatPrice(calculateTotalPrice)}</p>
    </div>
  );
}
