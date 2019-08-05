// this is a select statement in nodejs
const ip_address = require('./ip_address')

const dse = require('dse-driver');
const client = new dse.Client({ contactPoints: [ip_address()], localDataCenter: 'datacenter1' });

const query1 = 'SELECT * FROM crud.users WHERE name = BOB';
client.execute(query1)
.then(result => console.log('User with email %s', result.rows[0].email));


const query2 = 'SELECT * FROM crud.users WHERE name = ?';
client.execute(query2, [ 'someone' ])
  .then(result => console.log('User with email %s', result.rows[0].email));