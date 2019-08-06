const init_connection = require('./ip_address')

connection = init_connection()
// this is a insert statement in nodejs
const query1 = 'INSERT INTO crud.users (first_name,last_name,age) VALUES (BOB,BOBERSON,21)';
connection.client.execute(query1)
.then(result => console.log(result))
.catch((error) => {console.log(error)});