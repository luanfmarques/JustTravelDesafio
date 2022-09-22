import styled from "styled-components";

export const CartModalContainer = styled.div`
  position: absolute;
  top: 65px;
  right: 0;
  background: ${({ theme }) => theme.color.gray00};
  padding: 22px 14px;
  width: 338px;
  min-height: 326px;
  z-index: 11;
  border-radius: 8px;
  box-shadow: 0px 8px 25px rgba(166, 166, 166, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:before {
    content: "";
    height: 15px;
    width: 15px;
    background-color: ${({ theme }) => theme.color.gray00};
    position: absolute;
    transform: rotate(45deg);
    right: 37px;
    top: -4px;
  }
  & button {
    height: 50px;
    width: 100%;
    margin-top: 40px;
  }
`;

export const BackgroundModal = styled.div`
  background-color: rgba(0, 0, 0, 0.49);
  z-index: 10;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ItemsContainer = styled.div`
  max-height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: auto;
  padding-bottom: 15px;
  flex: 1;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e3e3e8;
  padding-top: 24px;
  margin-top: 10px;
`;

export const PriceTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  font-family: sans-serif;
  color: #868a9d;
`;

export const TotalPriceValue = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  font-family: sans-serif;
  color: ${({ theme }) => theme.color.brandColorBlue};
`;

export const EmptyCart = styled.p`
  margin: auto;
  color: ${({ theme }) => theme.color.gray40};
`;
