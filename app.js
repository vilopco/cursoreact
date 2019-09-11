const express = require('express');
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var pagina= '<form method="post" action="//localhost:3000"><input type="text" name="nombre"><input type="submit" value="Submit"></form>';
    res.send(pagina);
});

app.post('/', function (req, res) {
    res.send("<h1>Hola "+req.body.nombre+"!</h1>");   
})

app.listen(3000, () => console.log('Listening on port 3000!'));