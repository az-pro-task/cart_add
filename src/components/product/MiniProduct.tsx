import React from "react";
import ICartItem from "../../types/ICartItem";
import { formatMoney } from "../../tools/formatMoney";
import "./MiniProduct.scss";
export interface MiniProductProps {
  dataSource: ICartItem;
}
const MiniProduct = (props: MiniProductProps) => {
  const item = props.dataSource;
  return (
    <div className='my-mini_product'>
      <img className='my-mini_product__img' src={item.img} alt='img' />
      <div className='my-mini_product__content'>
        <div className='my-mini_product__title'>{item.name}</div>
        <div className='my-mini_product__money'>
          <span className='my-mini_product__amount'>{item.amount}x </span>
          <span className='my-mini_product__price'>{formatMoney(item.price)}</span>
        </div>
        <div className='my-mini_product__spec'>Size: {item.spec}</div>
      </div>
    </div>
  );
};

export default MiniProduct;
