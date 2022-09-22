import styled from "styled-components";

export const TicketImageContainer = styled.div`
  background-color: #d9d9d9;
  max-width: 213px;
  min-width: 213px;
  min-height: 233px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TagAndHeartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  padding: 14px 13px;
  width: 100%;
`;

type HeartContainerProps = {
  isFavorited: boolean;
};

export const HeartContainer = styled.div<HeartContainerProps>`
  cursor: pointer;
  svg path {
    fill: ${({ isFavorited }) => !isFavorited && "transparent"};
  }
`;
