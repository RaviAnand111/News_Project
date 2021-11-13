module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("news", {
        news_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        url_to_image: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        published_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    })
    return News
}