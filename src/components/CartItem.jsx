import { formatPrice } from "../utils/formatPrice";
import { getImageURL } from "../utils/imageURL";
import IconRemoveItem from "./icons/IconRemoveItem";

export default function CartItem({ item, onClick, confirmOrder }) {
  const { image, name, price, count = 1 } = item;
  const { thumbnail } = image;
  const imageURL = getImageURL(thumbnail);
  return (
    <>
      <li className="flex items-center justify-between gap-4 py-4 border-b">
        <div className="flex gap-4 items-center">
          {confirmOrder && (
            <img
              className="size-12 object-cover"
              src={imageURL}
              alt={`Image of ${name}`}
            />
          )}
          <div className="flex flex-col">
            <p className="line-clamp-2 font-bold mb-2">{name}</p>
            <div className="flex flex-wrap gap-2 text-primary">
              <p className="font-bold mr-2">{count}x</p>
              <p className="text-rose-400">@ ${formatPrice(price)}</p>
              {!confirmOrder && (
                <p className="text-rose-400 font-semibold">
                  ${formatPrice(price * count)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          {!confirmOrder ? (
            <IconRemoveItem onClick={onClick} />
          ) : (
            <p className="font-semibold">${formatPrice(price * count)}</p>
          )}
        </div>
      </li>
    </>
  );
}
