const express = require('express');
const app = express();
const calc = require('./micalculadora')

app.get("/",(req, res)=>{
    res.send("Hola")
    console.log(calc.Sumar(1,3))
})

app.listen(7576,()=>{
    console.log('servidor iniciado')
});
