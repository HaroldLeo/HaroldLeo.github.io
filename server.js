const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || PORT, 
	() => console.log("Server is running..."));