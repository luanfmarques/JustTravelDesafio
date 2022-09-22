import { useCallback, useState } from "react";
import { ITicket } from "../interfaces/ITicket";
import { TicketsService } from "../services/TicketsService";

export const useTicket = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [ticketDetail, setTicketDetail] = useState<ITicket>();
  const [isLoading, setIsLoading] = useState(true);

  const getAllTickets = useCallback(async () => {
    setIsLoading(true);
    const { status, data } = await TicketsService.getAllTickets();
    data && setIsLoading(false);
    if (status !== 200) throw new Error();

    setTickets(data);
  }, []);

  const getTicketDetail = useCallback(async (id: string) => {
    setIsLoading(true);
    const { status, data } = await TicketsService.getTicketDetail(id);
    data && setIsLoading(false);
    if (status !== 200) throw new Error();

    setTicketDetail(data);
  }, []);

  return {
    isLoading,
    tickets,
    getAllTickets,
    ticketDetail,
    getTicketDetail,
  };
};
