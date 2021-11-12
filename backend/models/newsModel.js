module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("news", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        url: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        published_at: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    })
    return News
}