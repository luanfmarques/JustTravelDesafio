import React, { useState, useMemo, useCallback } from "react";
import { Search } from "../components/Search";
import { SideFilter } from "../components/SideFilter";
import { Ticket } from "../components/Ticket";
import { ListTicketsContainer } from "../components/Ticket/style";
import { useTicketContext } from "../contexts/Tickets-provider";
import { ITicket } from "../interfaces/ITicket";
import { ContentContainer } from "../styles/home";
import { HeadFC } from "gatsby";

const IndexPage = () => {
  const { listTickets, isLoading, isFavorite } = useTicketContext();
  const [filterText, setFilterText] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("1");

  const filterSearch = (list: ITicket[], textFilter: string) => {
    return list.filter(
      (item) =>
        item.name
          .toLocaleLowerCase()
          .includes(textFilter.toLocaleLowerCase()) ||
        item.location
          .toLocaleLowerCase()
          .includes(textFilter.toLocaleLowerCase())
    );
  };

  const resetFilters = useCallback(() => {
    setSelectedRadio("1");
  }, []);

  type pricesRangeType = {
    [key: string]: { min: number; max: number };
  };

  const pricesRange: pricesRangeType = useMemo(
    () => ({
      "1": { min: 10, max: 1000 },
      "2": { min: 10, max: 750 },
      "3": { min: 10, max: 500 },
      "4": { min: 10, max: 250 },
    }),
    []
  );

  return (
    <>
      <Search onChange={setFilterText} />
      <ContentContainer>
        <SideFilter
          selectedRadio={selectedRadio}
          onChange={setSelectedRadio}
          resetFilter={resetFilters}
          pricesRange={pricesRange}
        />
        <ListTicketsContainer>
          {!isLoading ? (
            filterSearch(listTickets, filterText)
              .filter(
                (i) =>
                  parseInt(i.price.discount) <=
                    pricesRange[selectedRadio].max &&
                  parseInt(i.price.discount) >= pricesRange[selectedRadio].min
              )
              .sort((a, b) => {
                return (
                  isFavorite.findIndex((p) => p.id === b.id) -
                    isFavorite.findIndex((p) => p.id === a.id) ||
                  b.rating.value - a.rating.value ||
                  b.rating.reviews_count - a.rating.reviews_count
                );
              })
              .map((item) => (
                <Ticket
                  ticketData={item}
                  key={item.id}
                  favoritedList={isFavorite}
                />
              ))
          ) : (
            <div>Carregando...</div>
          )}
        </ListTicketsContainer>
      </ContentContainer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Just Travel</title>;
