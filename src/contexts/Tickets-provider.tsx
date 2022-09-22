import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useTicket } from "../hooks/useTickets";
import { ITicket } from "../interfaces/ITicket";

type TicketContextProviderProps = {
  children?: ReactNode;
};

type favorite = {
  id: string;
};

type TicketContextType = {
  listTickets: ITicket[];
  isLoading: boolean;
  toggleItemFavorite: (id: string) => void;
  isFavorite: favorite[];
};

export const TicketsCartContext = createContext({} as TicketContextType);

const TicketsContextProvider = ({ children }: TicketContextProviderProps) => {
  const [listTickets, setListTickets] = useState<ITicket[]>([]);
  const [isFavorite, setIsFavorite] = useState<favorite[]>([]);
  const { tickets, getAllTickets, isLoading } = useTicket();

  useEffect(() => {
    getAllTickets();
  }, [getAllTickets]);

  useEffect(() => {
    setListTickets(tickets);
  }, [tickets]);

  function toggleItemFavorite(id: string) {
    setIsFavorite((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id }];
      } else {
        return currItems.filter((item) => item.id !== id);
      }
    });
  }

  return (
    <TicketsCartContext.Provider
      value={{
        listTickets,
        isLoading,
        toggleItemFavorite,
        isFavorite,
      }}
    >
      {children}
    </TicketsCartContext.Provider>
  );
};

export default TicketsContextProvider;

export const useTicketContext = () => {
  const context = useContext(TicketsCartContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
