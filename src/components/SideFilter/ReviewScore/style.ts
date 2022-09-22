import styled from "styled-components";

export const ReviewScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ReviewsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ReviewContainer = styled.div`
  position: relative;
  min-width: 189px;
  max-width: 189px;
`;

type ReviewContainerProps = {
  width?: number;
};

export const GrayBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #d9d9d9;
`;

export const YellowBar = styled.div<ReviewContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ width }) => (width ? `${width}%` : "10%")};
  display: flex;
  align-items: center;
  background-color: #ffad0d;
  span {
    font-weight: 450;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.gray00};
    margin-left: 6px;
  }
`;

export const BarAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  p {
    color: #556282;
  }
`;
