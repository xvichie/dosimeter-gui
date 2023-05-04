const express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors')

const app = express()
const port = 9999

var position = {
    'x': 0,
    'y': 0,
    'z': 0
};

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    res.send(position)
})

app.post('/', (req, res) => {
    let data = req.body;
    //console.log(req);
    console.log(JSON.stringify(data));
    position = JSON.stringify(data);
    res.send('Data Received: ' + JSON.stringify(data));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})