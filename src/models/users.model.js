const { DataTypes } = require('sequelize');

const db = require ( '../tools/database');

const Users = db.define ( 'users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,

    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field:'relase_date'
    }
});