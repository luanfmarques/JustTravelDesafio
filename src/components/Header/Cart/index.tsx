import React from "react";
import { Button } from "../../Button";
import CartIcon from "../../../assets/cart.svg";
import {
  CartButtonContent,
  CartNumberContainer,
  CartButtonContainer,
} from "./style";
import { CartModal } from "./CartModal";
import { useCartContext } from "../../../contexts/Cart-provider";

export const Cart = () => {
  const { isOpen, openCart, cartQuantity } = useCartContext();
  return (
    <CartButtonContainer>
      <Button onClick={openCart}>
        <CartButtonContent>
          <CartIcon />
          <CartNumberContainer>{cartQuantity}</CartNumberContainer>
        </CartButtonContent>
      </Button>
      {isOpen && <CartModal />}
    </CartButtonContainer>
  );
};
