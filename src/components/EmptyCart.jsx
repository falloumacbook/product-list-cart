import iconEmptyItem from "../assets/images/illustration-empty-cart.svg";

export default function EmptyCart() {
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <img src={iconEmptyItem} alt="No items in cart" />
        <p>Your added items will appear here</p>
      </div>
    </>
  );
}
