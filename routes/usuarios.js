const router = require('express').Router();

const { Router } = require('express');
const {
	crearUsuario,
	obtenerUsuarios,
	modificarUsuario,
	eliminarUsuario,
	obtenerUsuario
} = require('../controllers/usuario');


router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarios);
router.post('/', crearUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;