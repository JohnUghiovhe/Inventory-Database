# NoSQL Inventory Management System

## Overview
This project is an inventory management system built using Node.js and a NoSQL database. It provides a RESTful API for managing products, categories, and suppliers in an inventory system.

## Features
- Create, read, update, and delete (CRUD) operations for products, categories, and suppliers.
- Ability to place orders for products.
- Querying capabilities to retrieve products based on various criteria.

## Project Structure
```
NoSql-inventory-management
├── src
│   ├── controllers
│   │   └── productsController.js
│   ├── models
│   │   ├── productModel.js
│   │   ├── categoryModel.js
│   │   └── supplierModel.js
│   ├── routes
│       └── products.js         
├── app.js
├── db.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd NoSql-inventory-management
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the API at `http://localhost:3000/api`.

## API Endpoints
- **Products**
  - `POST /api/products` - Create a new product
  - `GET /api/products` - Retrieve all products
  - `GET /api/products/:id` - Retrieve a product by ID
  - `PUT /api/products/:id` - Update a product by ID
  - `DELETE /api/products/:id` - Delete a product by ID

- **Categories**
  - `POST /api/categories` - Create a new category
  - `GET /api/categories` - Retrieve all categories

- **Suppliers**
  - `POST /api/suppliers` - Create a new supplier
  - `GET /api/suppliers` - Retrieve all suppliers

## Database
The project uses a NoSQL database to store data. The `src/db/inventoryScript.js` file contains the scripts for creating collections and performing CRUD operations.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.