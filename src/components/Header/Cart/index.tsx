import React from "react";
import { Button } from "../../Button";
import CartIcon from "../../../assets/cart.svg";
import { CartButtonContent, CartNumberContainer } from "./style";

export const Cart = () => {
  return (
    <>
      <Button>
        <CartButtonContent>
          <CartIcon />
          <CartNumberContainer>0</CartNumberContainer>
        </CartButtonContent>
      </Button>
    </>
  );
};
