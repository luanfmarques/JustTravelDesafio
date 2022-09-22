import React from "react";
import { ITicket } from "../../interfaces/ITicket";
import {
  AboutContainer,
  ButtonsContainer,
  DiscountPriceContainer,
  LeftContentContainer,
  LocationContainer,
  PriceContainer,
  RightContentContainer,
  TicketContainer,
  TicketContent,
  TitleAndLocationContainer,
} from "./style";
import { TicketImage } from "./TicketImage";
import Location from "../../assets/location.svg";
import { TicketReviews } from "./TicketReviews";
import { Button } from "../Button";
import ArrowRight from "../../assets/arrowRight.svg";
import { Paragraph } from "../../styles/sharedStyles";
import { formatCurrency } from "../../helpers";
import { TicketBuyNow } from "./TicketBuyNow";
import { useTicketContext } from "../../contexts/Tickets-provider";
import { Link } from "gatsby";

type favoritedList = {
  id: string;
};

type TicketProps = {
  ticketData: ITicket;
  favoritedList: favoritedList[];
};

const TicketItem = ({ ticketData, favoritedList }: TicketProps) => {
  const { toggleItemFavorite } = useTicketContext();
  return (
    <TicketContainer>
      <TicketImage
        imageSrc={ticketData.image}
        imageAlt={ticketData.name}
        isFavorited={
          favoritedList.find((item) => item.id === ticketData.id) != null
        }
        onClick={() => toggleItemFavorite(ticketData.id)}
      />
      <TicketContent>
        <LeftContentContainer>
          <TitleAndLocationContainer>
            <h3>{ticketData.name}</h3>
            <LocationContainer>
              <Location />
              <p>{ticketData.location}</p>
            </LocationContainer>
          </TitleAndLocationContainer>
          <TicketReviews
            reviewsCount={ticketData.rating.reviews_count}
            value={ticketData.rating.value}
          />
        </LeftContentContainer>
        <RightContentContainer>
          <PriceContainer>
            <Paragraph color="gray50">
              {`de ${formatCurrency(parseInt(ticketData.price.full))} `}
              <span>por</span>
            </Paragraph>
            <DiscountPriceContainer>
              <p>R$</p>
              <h2>
                {formatCurrency(parseInt(ticketData.price.discount), true)}
              </h2>
            </DiscountPriceContainer>
          </PriceContainer>
          <ButtonsContainer>
            <Link to={`/ingresso/${ticketData.id}`}>
              <Button outlined>
                <AboutContainer>
                  Saber mais <ArrowRight />
                </AboutContainer>
              </Button>
            </Link>
            <TicketBuyNow itemId={ticketData.id} />
          </ButtonsContainer>
        </RightContentContainer>
      </TicketContent>
    </TicketContainer>
  );
};

export const Ticket = React.memo(TicketItem);
