CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    categoryId INT,
    FOREIGN KEY (categoryId) REFERENCES Categories(id) ON DELETE SET NULL
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    itemId INT NOT NULL,
    quantity INT NOT NULL,
    orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (itemId) REFERENCES Items(id) ON DELETE CASCADE
);