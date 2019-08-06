const init_connection = require('./ip_address')

connection = init_connection()

// this is a delete statement in nodejs
const query1 = 'DELETE FROM crud.users WHERE name = BOB';
connection.client.execute(query1)
.then(result => console.log(result))
.catch((error) => {console.log(error)});