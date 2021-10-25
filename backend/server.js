let express = require('express');

const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    database: 'test-registration',
    user: 'postgres',
    password: '3313'
})


client.connect();

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [{
        id: 0,
        userName: 'Sam',
        email: 'test@g.com',
        userText: 'Отправьте заказ в понеделькик'
    },
    {
        id: 1,
        userName: 'John',
        email: 'qwerty@yahoo.com',
        userText: 'Адрес не верный'
    },
    {
        id: 2,
        userName: 'Nikolay',
        email: 'asddsa@i.ua',
        userText: ''
    },
    {
        id: 3,
        userName: 'Victor',
        email: 'xxyyzz@yers.io',
        userText: 'Свяжитесь со мной по телефону'
    },
];



app.post('/users', function(req, res) {

    let user = {
        id: Date.now(),
        userName: req.body.name,
        email: req.body.email,
        text: req.body.text
    };
    users.push(user);

    console.log(req.body);
    res.send('post.data');

});


/////////////////////////////////////////////////// попытка запроса на сервер через mysql

// app.post('/users', function(req, res) {

//     let user = {
//         id: Date.now(),
//         userName: req.body.name,
//         email: req.body.email,
//         text: req.body.text
//     };

//     let userName = req.body.userName;
//     // users.push(user);

//      console.log(`is ${req.body.userName}`);
//     // res.send(users);

//     // client.connect();

//     // let userQuery = `INSERT INTO users (email) values ("testmail@dat.com") RETURNING *`;
//     // let userGetQuery = `SELECT * FROM users`;
//     console.log(user.userName);

//     client.query(`INSERT INTO users (name) WHERE name = ?`, [userName], (err, res) => {
//         if (!err) {
//             console.log(res.rows)
//         } else {
//             console.log(err.message)
//         }
//         client.end;
//     })

// });
/////////////////////////////////////////////////

app.get('/', function(req, res) {
    res.send('Hello API');
});

app.get('/users', function(req, res) {
    res.send(users);
});


app.listen(3012, function() {
    console.log('API started');
})

////////////////////////////////////////////////////////////////////////////////////////