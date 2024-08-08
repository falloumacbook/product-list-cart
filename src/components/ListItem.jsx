import { useContext } from "react";
import data from "../data/data.json";
import { formatPrice } from "../utils/formatPrice";
import { CartContext } from "../App";
import ButtonAdd from "./ButtonAdd";
import ButtonAddActive from "./ButtonAddActive";
import { getImageURL } from "../utils/imageURL";

export function Item({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { image, name, category, price } = item;
  const { thumbnail, mobile, tablet, desktop } = image;

  const addOneItemToCart = () => {
    const findItem = cartItems.find((item) => item.name === name);
    if (findItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { count: 1, ...item }]);
    }
  };

  const removeOneItemToCart = () => {
    const findItem = cartItems.find((item) => item.name === name);
    if (findItem.count > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, count: item.count - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.name !== name));
    }
  };

  const checkItemInCart = () => cartItems.some((item) => item.name === name);
  return (
    <>
      <div className={`card ${checkItemInCart() ? "card-active" : ""}`}>
        <picture>
          <source media="(width < 640px)" srcSet={getImageURL(mobile)} />
          <source media="(width < 768px)" srcSet={getImageURL(tablet)} />
          <img
            className="card-image rounded-2xl"
            src={getImageURL(desktop)}
            alt={`Image ${name}`}
          />
        </picture>
        {checkItemInCart() ? (
          <ButtonAddActive
            item={item}
            addOneItemToCart={addOneItemToCart}
            removeOneItemToCart={removeOneItemToCart}
            cartItems={cartItems}
          />
        ) : (
          <ButtonAdd addOneItemToCart={addOneItemToCart} />
        )}

        <div className="card-description">
          <p className="">{category}</p>
          <p className="font-bold">{name}</p>
          <p className="text-rose-700 font-semibold">${formatPrice(price)}</p>
        </div>
      </div>
    </>
  );
}

export default function ListItem() {
  return (
    <>
      <div>
        <h1 className="text-orange-700">Desserts</h1>
        <div className="list">
          {data.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
