const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/dbConfig');

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: config.DB_DIALECT
    }
);

const category = require('./category')(sequelize, DataTypes);
const item = require('./item')(sequelize, DataTypes);
const order = require('./order')(sequelize, DataTypes);

sequelize.authenticate()
  .then(() => {
    console.log('Connection is successfully.');
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Item = require('./item')(sequelize, DataTypes);
db.Category = require('./category')(sequelize, DataTypes);
db.Order = require('./order')(sequelize, DataTypes);

// Associations
category.hasMany(item, { foreignKey: 'categoryId' });
item.belongsTo(category, { foreignKey: 'categoryId' });
order.belongsTo(item, { foreignKey: 'itemId' });

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Tables sync successful')
    })
    .catch((err) => {
    console.log(err);
    });

module.exports = {
    sequelize,
    item,
    category,
    order
};