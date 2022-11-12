let OrderItem = [
  {
    id: 1,
    orderId: 1,
    ProductId: 1,
    price: 100,
    Qty: 2,
  },
  {
    id: 2,
    orderId: 1,
    ProductId: 2,
    price: 200,
    Qty: 1,
  },
  {
    id: 3,
    orderId: 2,
    ProductId: 3,
    price: 300,
    Qty: 1,
  },
];

const sumPrice = OrderItem.reduce((sum, curr) => {
  return sum + curr?.price * curr?.Qty;
}, 0);

console.log(sumPrice);
