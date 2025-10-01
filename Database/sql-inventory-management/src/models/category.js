module.exports = (sequelize, DataTypes) => {
    const CategoryModel = sequelize.define('Category', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return CategoryModel;
};