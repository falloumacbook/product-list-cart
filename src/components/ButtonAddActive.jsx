import IconDecrement from "./icons/IconDecrement";
import IconIncrement from "./icons/IconIncrement";

export default function ButtonAddActive({
  item,
  addOneItemToCart,
  removeOneItemToCart,
  cartItems,
}) {
  const itemCount = () =>
    cartItems.find((cartItem) => cartItem.name === item.name).count;

  return (
    <>
      <button className="card-button-active">
        <IconDecrement onClick={removeOneItemToCart} />
        {itemCount()}
        <IconIncrement onClick={addOneItemToCart} />
      </button>
    </>
  );
}
