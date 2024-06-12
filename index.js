const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});


app.get('/about', (req, res) => {
    res.status(200).send('this about page');
});

app.use("/api/students", require("./routes/student.router"));

app.listen(3000, () => console.log('Example app listening on port http://localhost:3000'));