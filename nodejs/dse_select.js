const init_connection = require('./ip_address')

connection = init_connection()
// this is a select statement in nodejs
const query1 = 'SELECT * FROM crud.users WHERE name = BOB';
connection.client.execute(query1)
.then(result => {
    result.forEach(row => {
        console.log(row)
    });
})
.catch((error) => {console.log(error)});