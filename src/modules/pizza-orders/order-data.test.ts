import { pizzaOrdersData, PizzaOrders } from './order-data';

describe('order-data', () => {
  it('exports pizzaOrdersData as a non-empty array', () => {
    expect(Array.isArray(pizzaOrdersData)).toBe(true);
    expect(pizzaOrdersData.length).toBeGreaterThan(0);
  });

  it('each pizza order has the expected structure', () => {
    pizzaOrdersData.forEach(order => {
      expect(order).toHaveProperty('id');
      expect(order).toHaveProperty('orderId');
      expect(order).toHaveProperty('customerName');
      expect(order).toHaveProperty('pizzaType');
      expect(order).toHaveProperty('quantity');
      expect(order).toHaveProperty('price');
      expect(order).toHaveProperty('createdAt');
      expect(order).toHaveProperty('image');
      expect(order).toHaveProperty('status');
    });
  });
}); 