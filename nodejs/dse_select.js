const connection = require('./ip_address')

// this is a select statement in nodejs
connection.client.execute('SELECT * FROM crud.users')
.then(result => {
    result.rows.forEach(row => {
        console.log(row)
    });
})
.catch(error => console.log(error.message));