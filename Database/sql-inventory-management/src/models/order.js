module.exports = (sequelize, DataTypes) => {
    const OrderModel = sequelize.define('Order', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    return OrderModel;
};
