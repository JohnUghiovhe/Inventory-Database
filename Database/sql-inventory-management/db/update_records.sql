UPDATE items
SET name = 'Updated Item Name', quantity = 50, price = 19.99
WHERE id = 1;

UPDATE orders
SET status = 'Shipped', updated_at = NOW()
WHERE id = 2;