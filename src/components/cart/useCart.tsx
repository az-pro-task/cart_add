import { useState } from "react";
import getServiceToken from "../../tools/getServiceToken";
import ICartItem from "../../types/ICartItem";

export default function useCart() {
  const [cart, setCart] = useState<Record<string, ICartItem>>({});

  const addItem = (cartItem: ICartItem) => {
    let item = cart[cartItem.spec];
    if (!item) {
      item = { ...cartItem, amount: 0 };
    }

    item.amount += cartItem.amount;

    setCart({ ...cart, [item.spec]: item });
  };

  const items = Object.values(cart);
  const total = items.reduce((total, item) => (total += item.amount), 0);

  return {
    items,
    total,
    addItem
  };
}

export const CartService = getServiceToken(useCart);
