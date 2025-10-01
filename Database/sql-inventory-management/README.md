# Inventory Management System

This project is an inventory management system built using Node.js and Sequelize. It provides functionalities to manage items, categories, and orders in a structured manner.

## Project Structure

```
inventory-management-system
├── src
│   ├── app.js                  # Entry point of the application
│   ├── models                  # Contains Sequelize models
│   │   ├── index.js
│   │   └── item.js
│   ├── controllers             # Contains business logic for handling requests
│   │   └── item.js
│   ├── routes                  # Defines API routes
│   │   └── item.js
│   └── config                  # Configuration files
│       └── dbConfig.js
├── db                          # SQL scripts for database operations
│   ├── create_tables.sql       # Script to create necessary tables
│   ├── insert_records.sql      # Script to insert sample records
│   ├── delete records.sql      # Script to delete sample records
│   ├── update records.sql      # Script to update sample records
│   └── queries.sql             # Script for querying records
├── package.json                # NPM configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd inventory-management-system
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Create a database in your preferred SQL database management system.
   - Update the database configuration in `src/config/database.js` with your database credentials.

4. **Run SQL scripts:**
   - Execute `sql/create_tables.sql` to create the necessary tables.
   - Optionally, run `sql/insert_records.sql` to populate the tables with sample data.

5. **Start the application:**
   ```
   npm start
   ```

## Usage

- The API provides endpoints to manage inventory items, categories, and orders. Refer to the routes defined in `src/routes/inventoryRoutes.js` for available endpoints and their usage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.