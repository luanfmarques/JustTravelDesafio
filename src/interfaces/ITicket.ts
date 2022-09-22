export interface Price {
  full: string;
  discount: string;
}

export interface Rating {
  reviews_count: number;
  value: number;
}

export interface ITicket {
  createdAt: string;
  name: string;
  image: string;
  price: Price;
  rating: Rating;
  location: string;
  description: string;
  id: string;
}
