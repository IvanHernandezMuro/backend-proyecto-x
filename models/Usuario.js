const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const bcrypt = require('bcrypt');

const User = sequelize.define('usuario', {
	id : {
		type : DataTypes.INTEGER,
		allowNull : false,
		primaryKey : true
	},
	email : {
		type : DataTypes.TEXT
	},
	password : {
		type : DataTypes.TEXT
	}
},{
	hooks : {
		beforeCreate: (user) => {
			const salt = bcrypt.genSaltSync();
			user.password = bcrypt.hashSync(user.password, salt);
		},
	},
	freezeTableName: true,
	timestamps: false
})
//** Proceso de validacion de cifrado **
User.prototype.validPassword = function(pass){
	return bcrypt.compareSync(pass, this.password); //BCRYP es una biblioteca que nos permite el cifrado de datos en la base de datos
}

module.exports = User;