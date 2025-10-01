INSERT INTO Categories (name, description) VALUES 
('Electronics', 'Devices and gadgets'),
('Furniture', 'Home and office furniture'),
('Clothing', 'Apparel and accessories');

INSERT INTO Items (name, description, price, quantity, categoryId) VALUES 
('Laptop', '15-inch laptop with 16GB RAM', 1200.00, 10, 1),
('Smartphone', 'Latest model smartphone', 800.00, 25, 1),
('Office Chair', 'Ergonomic office chair', 150.00, 15, 2),
('Dining Table', 'Wooden dining table for six', 500.00, 5, 2),
('T-shirt', 'Cotton t-shirt in various sizes', 20.00, 100, 3);

INSERT INTO Orders (itemId, quantity, orderDate) VALUES 
(1, 2, '2023-10-01'),
(2, 1, '2023-10-02'),
(3, 4, '2023-10-03');