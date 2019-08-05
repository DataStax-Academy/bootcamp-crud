// this is a update statement in nodejs
const ip_address = require('./ip_address')

const dse = require('dse-driver');
const client = new dse.Client({ contactPoints: [ip_address()], localDataCenter: 'datacenter1' });


const query1 = 'UPDATE crud.users SET age = 30 WHERE name = BOB';
client.execute(query1)
.then(result => console.log('User with email %s', result.rows[0].email));