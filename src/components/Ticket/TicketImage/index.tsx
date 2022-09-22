import React from "react";
import { Tag } from "../../Tag";
import {
  HeartContainer,
  TagAndHeartContainer,
  TicketImageContainer,
} from "./style";
import Heart from "../../../assets/heart.svg";

type TicketImageProps = {
  imageSrc: string;
  imageAlt: string;
  isFavorited: boolean;
  onClick: () => void;
};

export const TicketImage = ({
  imageSrc,
  imageAlt,
  isFavorited,
  onClick,
}: TicketImageProps) => {
  return (
    <>
      <TicketImageContainer>
        <img src={imageSrc} alt={`${imageAlt} image`} loading="lazy" />
        <TagAndHeartContainer>
          <Tag white>Ingresso</Tag>
          <HeartContainer
            isFavorited={isFavorited}
            onClick={onClick}
            data-testid="heart"
          >
            <Heart />
          </HeartContainer>
        </TagAndHeartContainer>
      </TicketImageContainer>
    </>
  );
};
