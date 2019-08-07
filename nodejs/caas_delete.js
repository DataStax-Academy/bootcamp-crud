const connection = require('./ip_address')

// this is a delete statement in nodejs
connection.client.execute(
    'DELETE * FROM crud.users WHERE first_name = ?',
    ['Bob']
)
.then(console.log('Success'))
.catch(error => console.log(error.message));