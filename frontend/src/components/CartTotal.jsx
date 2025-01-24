import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl mb-3">
        <p className="font-medium">Cart Total</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Ship Fee:</p>
          <p>
            {currency} {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total:</p>
          <p>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
