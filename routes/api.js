const { Router } = require('express');
var express = require('express');
var router = express.Router();
const connection = require("../db");


/* DEVOLVER TODAS LAS BANDAS */
router.get('/all', (req, res) => {
    try {
        connection.query('SELECT * FROM bandas', (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (error) {
        res.json(error);
    }
});


/* DEVOLVER BANDA DETALLE */
router.get('/detalles/:id', (req, res) => {
    try {
        connection.query('SELECT * FROM bandas WHERE idbanda = ?', req.params.id, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (error) {
        res.json(error);
    }
});


/* EDITAR BANDA DETALLE */
router.post('/editar/:id', (req, res) => {
    id = req.params.id;
    console.log('Id del proyecto: ', id);
    try {
        connection.query('UPDATE bandas SET ? WHERE idbanda = ?', [req.body, id], (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send(result);
        })
    } catch (error) {
        res.json(error);
    }
});


/* ELIMINAR BANDA */
router.delete('/borrar/:id', (req, res) => {
    try {
        connection.query('DELETE FROM bandas WHERE idbanda = ?', req.params.id, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (error) {
        res.json(error);
    }
});


/* BUSCAR BANDA */
router.get('/buscar/:nombre', (req, res) => {
    nombre = "%" + req.params.nombre + "%"
    console.log(nombre);
    try {
        connection.query('SELECT * FROM bandas WHERE nombre_banda LIKE ?', nombre, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (error) {
        res.json(error);
    }
});


/* CREAR BANDA */
router.post('/crearbanda', (req, res) => {
    /* req.body.idbanda = "?" */
    console.log(req.body);
    try {
        connection.query('INSERT INTO bandas SET ?', req.body, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } catch (error) {
        res.json(error);
    }
});



module.exports = router;