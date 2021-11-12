module.exports = (sequelize, DataTypes) => {
    
    const Country = sequelize.define("country", {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    }
    )
    return Country
}