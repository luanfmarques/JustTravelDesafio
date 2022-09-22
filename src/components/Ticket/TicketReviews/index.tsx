import React from "react";
import {
  CustomParagraph,
  TicketReviewsContainer,
  ValueContainer,
} from "./style";

type TicketReviewsProps = {
  reviewsCount: number;
  value: number;
};

export const TicketReviews = ({ reviewsCount, value }: TicketReviewsProps) => {
  return (
    <TicketReviewsContainer>
      <ValueContainer>{value}</ValueContainer>
      <p>Excellent</p>
      <CustomParagraph color="gray40">{`(${reviewsCount} Reviews)`}</CustomParagraph>
    </TicketReviewsContainer>
  );
};
