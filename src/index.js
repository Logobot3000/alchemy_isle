const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/../public'));
app.use('/core', express.static(__dirname + '/core'));
app.use('/modules', express.static(__dirname + '/../node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Alchemy Isle server is up and running on port ${port}`);
});