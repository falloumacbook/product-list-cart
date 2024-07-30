import { createContext, useState } from "react";
import Cart from "./components/Cart";
import ListItem from "./components/ListItem";
import OrderModal from "./components/OrderModal";

export const CartContext = createContext();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <CartContext.Provider
        value={{ cartItems, setCartItems, isOpenModal, setIsOpenModal }}
      >
        <main className="container mx-auto px-4 py-16">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-[1fr_33%]">
            <ListItem />
            <Cart />
          </div>
        </main>
        <OrderModal />
      </CartContext.Provider>
    </>
  );
}
