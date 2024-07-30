export const removeItemToCart = (name, cartItems, setCartItems) => {
    const removeItem = cartItems.filter((item) => item.name !== name);
    setCartItems(removeItem);
};