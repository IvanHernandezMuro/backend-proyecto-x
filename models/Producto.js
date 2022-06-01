const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('usuario', {
	id : {
		type: DataTypes.INTEGER,
		allowNull : false,
		primaryKey : true
	},
	emai: {
		type : DataTypes.TEXT,
	},
	password : {
		type : DataTypes.TEXT,
	}
},{
	freezeTableName : true,
	
})



const Producto = sequelize.define('producto', {
	id: {
		type : DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	nombre: {
		type : DataTypes.TEXT
	},
	precio: {
		type : DataTypes.REAL
	},
	cat: {
		type : DataTypes.TEXT
	},
	desc : {
		type : DataTypes.TEXT
	}
},{
	freezeTableName: true,
	timestamps: false
})

module.exports = Producto;
