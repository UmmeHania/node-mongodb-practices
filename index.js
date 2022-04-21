const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
//middleware for converting data in json
app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hey there!From node,react,react router and express.js')
})

const users = [
    { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "0178888888" },
    { id: 2, name: "Jorina", email: "jorina@gmail.com", phone: "0178888888" },
    { id: 3, name: "Sonamoni", email: "sonamoni@gmail.com", phone: "0178888888" },
    { id: 4, name: "Banu", email: "banu@gmail.com", phone: "0178888888" },
    { id: 5, name: "Tohfa", email: "tohfa@gmail.com", phone: "0178888888" },
]

app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }
    // console.log('query', req.query)

    // res.send(users);
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

//POST router
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('Listening to port', port)
})