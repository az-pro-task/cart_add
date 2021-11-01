import React, { FC, useContext } from "react";
import MiniProduct from "../product/MiniProduct";
import "./MiniCart.scss";
import { CartService } from "./useCart";
import useMiniCart from "./useMiniCart";
import { BiCart } from "react-icons/bi";

const MiniCart: FC = () => {
  const { total, items } = useContext(CartService);
  const { visible, handleClick, handleHover, isMobile } = useMiniCart();

  return (
    <div className='my-cart'>
      <div className={`my-cart__toggle ${visible ? "is-active" : ""}`} onClick={()=>handleClick()} onMouseLeave={handleHover} onMouseEnter={handleHover} >
        {isMobile ? <BiCart size={20} /> : "My Cart "} ({total})
      </div>
      <div className='my-cart__popup' style={{ display: visible ? "block" : "none", minWidth: isMobile?"280px":"380px"}} 
      
      >
        {items.length === 0 && "no items"}
        {items.map((item, i) => (
          <MiniProduct key={i} dataSource={item} />
        ))}
      </div>
    </div>
  );
};

export default MiniCart;
