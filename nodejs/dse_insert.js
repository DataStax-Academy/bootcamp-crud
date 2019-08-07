const connection = require('./ip_address')

// this is a insert statement in nodejs
connection.client.execute(
    'INSERT INTO crud.users (first_name,last_name,age) VALUES (?,?,?)',
    ['Bob','Boberson',21],
)
.then(result => console.log(result))
.catch(error => console.log(error.message));