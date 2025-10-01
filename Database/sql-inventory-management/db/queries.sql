SELECT * FROM Items;

SELECT * FROM Categories;

SELECT * FROM Orders;

SELECT Items.id, Items.name, Categories.name AS category_name 
FROM Items 
JOIN Categories ON Items.category_id = Categories.id;

SELECT Orders.id, Orders.order_date, Items.name AS item_name, Orders.quantity 
FROM Orders 
JOIN Items ON Orders.item_id = Items.id;

SELECT COUNT(*) AS total_items, Categories.name AS category_name 
FROM Items 
JOIN Categories ON Items.category_id = Categories.id 
GROUP BY Categories.name;

SELECT Items.name, SUM(Orders.quantity) AS total_sold 
FROM Items 
JOIN Orders ON Items.id = Orders.item_id 
GROUP BY Items.name 
ORDER BY total_sold DESC;