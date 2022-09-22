import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 57px;
    height: 62px;
    margin-right: 18px;
    object-fit: cover;
  }
`;

export const CartItemContentContainer = styled.div`
  display: flex;
  svg {
    align-self: flex-start;
  }
`;

export const TagAndTicketName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const TicketName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4d5163;
  font-family: sans-serif;
  text-transform: capitalize;
  min-height: 35px;
`;
export const TrashContainer = styled.div`
  padding: 0 5px;
  cursor: pointer;
  height: fit-content;
`;

export const ItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
  padding-top: 10px;
`;

export const MiddleItemContainer = styled.div`
  width: 100%;
`;

export const Quantity = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #989aa7;
  font-family: sans-serif;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.brandColorBlue};
  font-family: sans-serif;
`;
