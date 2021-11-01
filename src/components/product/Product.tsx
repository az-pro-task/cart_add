import React, { useContext } from "react";
import { formatMoney } from "../../tools/formatMoney";
import { PlatformService } from "../../tools/usePlatform";
import { IProduct } from "../../types/IProduct";
import Button from "../ui/Button";
import "./Product.scss";
import useProduct from "./useProduct";

export interface ProductProps {
  dataSource: IProduct;
}
const Product = (props: ProductProps) => {
  const product = props.dataSource;
  const { isMobile } = useContext(PlatformService);
  const { handlePick, handleAddToCart, spec } = useProduct(product);
  return (
    <div className={`my-product ${isMobile ? "" : "is-desktop"}`}>
      <img className='my-product__img' src={product.img} alt='img' />
      <div className='my-product__content'>
        <h2 data-testid='name' className='my-product__title'>
          {product.name}
        </h2>
        <p data-testid='price' className='my-product__money'>
          {formatMoney(product.price)}
        </p>
        <p data-testid='desc' className='my-product__description'>
          {product.description}
        </p>
        <div className='my-specs'>
          <div data-testid='spec_name' className='my-specs__name'>
            Size<span className='my-specs_star'>* </span><span className='my-specs_size'>{spec!==""&&spec}</span>
          </div>
          <ul className='my-specs__list'>
            {product.specs.map((s) => {
              return (
                <li data-testid={"item_" + s} className={`my-specs__item ${s === spec ? "is-active" : ""}`} key={s} onClick={() => handlePick(s)}>
                  {s}
                </li>
              );
            })}
          </ul>
        </div>
        <Button 
        onClick={handleAddToCart}
        className={isMobile ? "" : "desk-button"}
        >ADD TO CART</Button>
      </div>
    </div>
  );
};

export default Product;
