import React from "react";
import { useCartContext } from "../../../../contexts/Cart-provider";
import { useTicketContext } from "../../../../contexts/Tickets-provider";
import { formatCurrency } from "../../../../helpers";
import { ITicket } from "../../../../interfaces/ITicket";
import { Button } from "../../../Button";
import { CartItem } from "./CartItem";
import {
  BackgroundModal,
  CartModalContainer,
  EmptyCart,
  ItemsContainer,
  PriceTitle,
  TotalPrice,
  TotalPriceValue,
} from "./style";

export const CartModal = () => {
  const { closeCart, cartItems } = useCartContext();
  const { listTickets } = useTicketContext();

  const totalValue = () => {
    const value = cartItems.reduce((total, cartItem) => {
      const item: ITicket | undefined = listTickets.find(
        (i) => i.id === cartItem.id
      );
      return total + (parseInt(item!.price.discount) || 0) * cartItem.quantity;
    }, 0);

    return formatCurrency(value);
  };

  return (
    <>
      <CartModalContainer data-testid="cartModalContainer">
        <ItemsContainer>
          {cartItems.length !== 0 ? (
            cartItems.map((item, index) => (
              <CartItem key={Math.random()} position={index} {...item} />
            ))
          ) : (
            <EmptyCart>Carrinho vazio.</EmptyCart>
          )}
        </ItemsContainer>
        <TotalPrice>
          <PriceTitle>Valor à vista</PriceTitle>
          <TotalPriceValue>{totalValue()}</TotalPriceValue>
        </TotalPrice>
        <Button disable={cartItems.length === 0}>Finalizar compra</Button>
      </CartModalContainer>
      <BackgroundModal onClick={closeCart} />
    </>
  );
};
