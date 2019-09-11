const express = require('express');
const app = express();

app.get('/:param', (req, res) => {
    res.send(req.header(req.params.param));
})

app.listen(3000, () => console.log('Listening on port 3000!'));