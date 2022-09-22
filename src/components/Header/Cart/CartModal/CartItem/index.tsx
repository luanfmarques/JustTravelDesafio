import React from "react";
import { useCartContext } from "../../../../../contexts/Cart-provider";
import { useTicketContext } from "../../../../../contexts/Tickets-provider";
import { Tag } from "../../../../Tag";
import {
  CartItemContainer,
  CartItemContentContainer,
  ItemPriceContainer,
  MiddleItemContainer,
  Price,
  Quantity,
  TagAndTicketName,
  TicketName,
  TrashContainer,
} from "./style";
import Trash from "../../../../../assets/trash.svg";
import { addLeadingZeros, formatCurrency } from "../../../../../helpers";

type CartItemProps = {
  id: string;
  quantity: number;
  date: string;
  position: number;
};

export const CartItem = ({ id, quantity, date, position }: CartItemProps) => {
  const { removeFromCart } = useCartContext();
  const { listTickets } = useTicketContext();

  const item = listTickets.find((i) => i.id === id);
  if (item == null) return null;

  const getFormattedCurrency = () => {
    const price = parseInt(item.price.discount) * quantity;
    return formatCurrency(price);
  };

  return (
    <CartItemContainer>
      <CartItemContentContainer>
        <img src={item.image} alt={`${item.name} logo`} loading="lazy" />
        <MiddleItemContainer>
          <TagAndTicketName>
            <Tag>Ticket</Tag>
            <TicketName>{`${item.name} - ${date}`}</TicketName>
          </TagAndTicketName>
          <ItemPriceContainer>
            <Quantity>{`Qtd ${addLeadingZeros(quantity, 2)}`}</Quantity>
            <Price>{getFormattedCurrency()}</Price>
          </ItemPriceContainer>
        </MiddleItemContainer>
        <TrashContainer
          data-testid="thrash"
          onClick={() => removeFromCart(position)}
        >
          <Trash />
        </TrashContainer>
      </CartItemContentContainer>
    </CartItemContainer>
  );
};
