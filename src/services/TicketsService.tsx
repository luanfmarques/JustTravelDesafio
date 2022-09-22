import { ITicket } from "../interfaces/ITicket";
import { Api } from "../providers";

const getAllTickets = () => Api.get<ITicket[]>("/tickets");
const getTicketDetail = (id: string) => Api.get<ITicket>(`/tickets/${id}`);

export const TicketsService = {
  getAllTickets,
  getTicketDetail,
};
