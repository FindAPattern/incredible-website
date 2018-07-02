const express = require('express');
const app = express();

const DEFAULT_PORT = 8081;
const PORT = process.env.PORT || DEFAULT_PORT;

app.get('/', (req, res) => res.send('Incredible website!'));

app.listen(PORT, () => console.log(`Incredible website listening on ${PORT}`));
