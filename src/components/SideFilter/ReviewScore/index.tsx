import React from "react";
import { Paragraph } from "../../../styles/sharedStyles";
import {
  BarAndText,
  GrayBar,
  ReviewContainer,
  ReviewScoreContainer,
  ReviewsItemContainer,
  YellowBar,
} from "./style";

export const ReviewScore = () => {
  return (
    <ReviewScoreContainer>
      <Paragraph type="medium" bold>
        Review Score
      </Paragraph>
      <ReviewsItemContainer>
        <BarAndText>
          <ReviewContainer>
            <GrayBar />
            <YellowBar width={85}>
              <span>9+</span>
            </YellowBar>
          </ReviewContainer>
          <Paragraph>Excelente (543)</Paragraph>
        </BarAndText>
        <BarAndText>
          <ReviewContainer>
            <GrayBar />
            <YellowBar width={75}>
              <span>8+</span>
            </YellowBar>
          </ReviewContainer>
          <Paragraph>Muito bom (543)</Paragraph>
        </BarAndText>
        <BarAndText>
          <ReviewContainer>
            <GrayBar />
            <YellowBar width={60}>
              <span>7+</span>
            </YellowBar>
          </ReviewContainer>
          <Paragraph>Bom (543)</Paragraph>
        </BarAndText>
        <BarAndText>
          <ReviewContainer>
            <GrayBar />
            <YellowBar width={50}>
              <span>6+</span>
            </YellowBar>
          </ReviewContainer>
          <Paragraph>Ruim (543)</Paragraph>
        </BarAndText>
        <BarAndText>
          <ReviewContainer>
            <GrayBar />
            <YellowBar>
              <span></span>
            </YellowBar>
          </ReviewContainer>
          <Paragraph>Péssimo (14)</Paragraph>
        </BarAndText>
      </ReviewsItemContainer>
    </ReviewScoreContainer>
  );
};
