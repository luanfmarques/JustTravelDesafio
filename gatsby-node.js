const axios = require("axios").default;

exports.createPages = async ({ actions: { createPage } }) => {
  const allTickets = await axios.get(
    "https://6308397f46372013f57877ab.mockapi.io/justtravel/tickets"
  );

  allTickets.data.map((ticket) => {
    createPage({
      path: `/ingresso/${ticket.id}`,
      component: require.resolve("./src/templates/TicketDetail/index.tsx"),
      context: { ticket },
    });
  });
};
