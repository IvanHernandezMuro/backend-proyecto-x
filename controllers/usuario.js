const User = require('../models/Usuario');
const { Op } = require('sequelize');

function crearUsuario(req, res) {
	var body = req.body;
	User.create(body)
	.then( user => res.status(200).send(user))
}

function obtenerUsuarios(req, res) {
	User.findAll()
	.then( users => res.status(200).send(users))
}

function modificarUsuario(req, res) {
	var body = req.body;
	var idP = req.params.id;
	User.update( body, {
		where : {
			id: idP
		}
	})
	.then( user => res.status(200).send(user))
}

function eliminarUsuario(req, res) {
	var idP = req.params.id;
	User.destroy({
		where : {
			id : idP
		}
	})
	.then(r => res.status(200).send("Se elimino el usuario"))
}

function obtenerUsuario(req,res){
	var idP = req.params.id;
	User.findOne({
		where : {
		id : idP
		}
	})
	.then(user => re.status(200).send(user))
}

module.exports = {
	crearUsuario,
	obtenerUsuarios,
	modificarUsuario,
	eliminarUsuario
}