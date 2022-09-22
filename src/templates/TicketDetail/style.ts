import styled from "styled-components";

export const TicketDetailContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  padding: 33px 60px;
  margin: auto;
`;

export const ScrollContainer = styled.div`
  max-height: calc(100vh - 103px);
  overflow: auto;
`;

export const ArrowAndTitleContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 34px;
`;

export const TitleAndSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2 {
    text-transform: capitalize;
  }
`;

export const IconAndSubtitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 450;
  font-size: 14px;
  line-height: 18px;
  gap: 4px;
  color: ${({ theme }) => theme.color.support05};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 434px;
  background-color: ${({ theme }) => theme.color.gray40};
  margin-bottom: 37px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const AboutAndBuyContainer = styled.div`
  display: flex;
  gap: 38px;
`;

export const ReviewAndAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BuyContainer = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.color.gray00};
  border-radius: 8px;
  max-width: 353px;
  min-width: 353px;
  margin-right: 29px;
`;
