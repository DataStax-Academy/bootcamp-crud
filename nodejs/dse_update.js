const init_connection = require('./ip_address')

connection = init_connection()
// this is a update statement in nodejs
const query1 = 'UPDATE crud.users SET age = 30 WHERE name = BOB';
connection.client.execute(query1)
.then(result => console.log(result))
.catch((error) => {console.log(error)});