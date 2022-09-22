import React, { useEffect, useState } from "react";
import { ITicket } from "../../interfaces/ITicket";
import {
  ArrowAndTitleContainer,
  IconAndSubtitle,
  TicketDetailContainer,
  TitleAndSubTitle,
  ImageContainer,
  AboutAndBuyContainer,
  ReviewAndAboutContainer,
  About,
  BuyContainer,
  ScrollContainer,
} from "./style";
import { Link, HeadFC } from "gatsby";
import ArrowBack from "../../assets/arrowBack.svg";
import Pin from "../../assets/pin.svg";
import { TicketReviews } from "../../components/Ticket/TicketReviews";
import { Paragraph } from "../../styles/sharedStyles";
import { SelectTicket } from "../../components/SelectTicket";
import { useTicket } from "../../hooks/useTickets";

type TicketDetailProps = {
  pageContext: {
    ticket: ITicket;
  };
};

const TicketDetail = ({ pageContext: { ticket } }: TicketDetailProps) => {
  const [ticketInfo, setTicketInfo] = useState<ITicket>();
  const { ticketDetail, getTicketDetail, isLoading } = useTicket();

  useEffect(() => {
    getTicketDetail(ticket.id);
  }, [getTicketDetail]);

  useEffect(() => {
    setTicketInfo(ticketDetail);
  }, [ticketDetail]);

  return !isLoading ? (
    <ScrollContainer>
      <TicketDetailContainer>
        <ArrowAndTitleContainer>
          <Link to="/">
            <ArrowBack />
          </Link>
          <TitleAndSubTitle>
            <h2>{ticketInfo?.name}</h2>
            <IconAndSubtitle>
              <Pin />
              {ticketInfo?.location}
            </IconAndSubtitle>
          </TitleAndSubTitle>
        </ArrowAndTitleContainer>
        <ImageContainer>
          <img
            src={ticketInfo?.image}
            alt={`${ticketInfo?.name} logo`}
            loading="lazy"
          />
        </ImageContainer>
        <AboutAndBuyContainer>
          <ReviewAndAboutContainer>
            <TicketReviews
              value={ticketInfo?.rating.value || 0}
              reviewsCount={ticketInfo?.rating.reviews_count || 0}
            />
            <About>
              <h3>Sobre o ingresso selecionado:</h3>
              <Paragraph color="gray40">{ticketInfo?.description}</Paragraph>
            </About>
          </ReviewAndAboutContainer>
          <BuyContainer>
            {ticketInfo && (
              <SelectTicket
                itemId={ticketInfo.id}
                itemPrice={parseInt(ticketInfo.price.discount)}
              />
            )}
          </BuyContainer>
        </AboutAndBuyContainer>
      </TicketDetailContainer>
    </ScrollContainer>
  ) : (
    <div>Carregando...</div>
  );
};

export default TicketDetail;

export const Head: HeadFC = () => <title>Just Travel</title>;
