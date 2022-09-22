import styled from "styled-components";
import { Paragraph } from "../../../styles/sharedStyles";

export const TicketReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
  p {
    margin-right: 11px;
  }
`;

export const ValueContainer = styled.div`
  background-color: ${({ theme }) => theme.color.brandColorBlue};
  color: ${({ theme }) => theme.color.gray10};
  font-size: 14px;
  line-height: 18px;
  border-radius: 2px;
  padding: 10px;
  margin-right: 6px;
`;

export const CustomParagraph = styled(Paragraph)`
  && {
    margin-right: 0;
  }
`;
