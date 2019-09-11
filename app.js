const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var limite=50;
    var cadena="";
    for(var i=1;i<=limite;i++){
        cadena += (i%2==0 ? "<p>"+i+" Soy Par!</p>": "<p>"+i+" Soy Impar!</p>");
    }
    res.send(cadena);
});

app.listen(3000, () => console.log('Listening on port 3000!'));