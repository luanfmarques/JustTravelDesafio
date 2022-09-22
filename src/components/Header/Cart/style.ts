import styled from "styled-components";

export const CartButtonContainer = styled.div`
  position: relative;
  button {
    position: relative;
    z-index: 11;
  }
`;

export const CartButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-weight: 450;
  font-size: 17px;
  line-height: 21px;
  font-family: "Arial";
`;

export const CartNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  width: 28px;
  height: 28px;
`;