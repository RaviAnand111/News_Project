module.exports = (sequelize, DataTypes) => {
    
    const Source = sequelize.define("source", {
        s_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        company: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    }
    )
    return Source
}