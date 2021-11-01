import { useContext, useState } from "react";
import { IProduct } from "../../types/IProduct";
import { CartService } from "../cart/useCart";

export default function useProduct(dataSource: IProduct) {
  const { addItem } = useContext(CartService);
  const [spec, setSpec] = useState("");

  const handlePick = (v: string) => {
    if (spec !== v) {
      setSpec(v);
    } else {
      setSpec("");
    }
  };
  const picked = !!spec;

  const handleAddToCart = () => {
    if (picked) {
      addItem({
        name: dataSource.name,
        img: dataSource.img,
        price: dataSource.price,
        spec,
        amount: 1
      });
    } else {
      alert("please pick a spec.");
    }
  };
  return { handleAddToCart, picked, handlePick, spec };
}
