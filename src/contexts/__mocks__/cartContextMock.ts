export const cartContextMock = {
  getItemQuantity: jest.fn(),
  setItemToCart: jest.fn(),
  removeFromCart: jest.fn(),
  openCart: jest.fn(),
  closeCart: jest.fn(),
  cartItems: [],
  cartQuantity: 0,
  isOpen: false,
};
