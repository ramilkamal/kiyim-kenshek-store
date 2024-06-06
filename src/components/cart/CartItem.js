import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import cartContext from "../../contexts/cart/cartContext";
import QuantityBox from "../common/QuantityBox";

const CartItem = (props) => {
  const { id, images, title, info, finalPrice, originalPrice, quantity, path } =
    props;

  const { removeItem } = useContext(cartContext);

  return (
    <>
      <div className="cart_item">
        <figure className="cart_item_img">
          <Link to={`${path}${id}`}>
            <img src={images[0]} alt="product-img" />
          </Link>
        </figure>
        <div className="cart_item_info">
          <div className="cart_item_head">
            <h4 className="cart_item_title">
              <Link to={`/product-details/${id}`}>
                {title} {info}
              </Link>
            </h4>
            <div className="cart_item_del">
              <span onClick={() => removeItem(id)}>
                <TbTrash />
              </span>
              <div className="tooltip">Elementni olib tashlash</div>
            </div>
          </div>

          <h2 className="cart_item_price">
            {finalPrice} so'm &nbsp;
            <small>
              <del>{originalPrice} so'm</del>
            </small>
          </h2>

          <QuantityBox itemId={id} itemQuantity={quantity} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
