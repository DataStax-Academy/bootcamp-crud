const connection = require('./ip_address')

// this is a update statement in nodejs
connection.client.execute(
    'UPDATE crud.users SET age = ? WHERE first_name = ?',
    [40,'Bob'],
    { prepare : true }
)
.then(console.log('Success'))
.catch(error => console.log(error.message));
// process.exit()