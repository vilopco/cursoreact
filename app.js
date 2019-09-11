const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    res.send("<h1>Hola " + req.params.nombre[0].toLocaleUpperCase()+ req.params.nombre.slice(1)+"!</h1>");   
});

app.listen(3000, () => console.log('Listening on port 3000!'));