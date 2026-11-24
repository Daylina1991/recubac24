const express = require('express');
const app = express();

const usuarios = require('./recursos/usuarios.js');//importa de objetos user


const  RECUPERATORIO_PUERTO = 3008;
const RECUPERATORIO_HOST = '127.0.0.1';

const NOMBRE = 'Dayana';
const APELLIDO = 'Tapia';


app.get('/',(req, res) => {
    res.send(`servidor de recuperatorio - localhost: “http://${HOST}:${PUERTO}`)


});





app.get("/", (req, res) => {
    res.send(`Bienvenidos al servidor del Recuperatorio del Primer parcial de - ${APELLIDO} y ${NOMBRE}`);
});




app.get("/usuarios", (req, res) => {
    res.json(usuarios.listaUsuarios);

});





app.get("/usuarios/ingreso/:id", (req, res) => {

    const id = Number(req.params.id);

    const usuario = usuarios.listaUsuarios.find(
        usuario => usuario.id === id
    );

    if (!usuario) {
        return res.status(404).json({
            error: "Usuario no encontrado."
        });
    }

    gestionarIngreso(usuario, res);

});




app.listen(RECUPERATORIO_PUERTO, RECUPERATORIO_HOST, () => {

    console.log(`servidor de recuperatorio - localhost: “http://${RECUPERATORIO_HOST}:${RECUPERATORIO_PUERTO}`);

});