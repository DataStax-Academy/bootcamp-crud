// this is a select statement in nodejs
// this is a insert statement in nodejs
const dse = require('dse-driver');
const client = new dse.Client({ contactPoints: [IPADDRESSHERE], localDataCenter: 'datacenter1' });


const query1 = 'SELECT * FROM users WHERE key = BOB';
client.execute(query1)


const query2 = 'SELECT * FROM users WHERE key = ?';
client.execute(query2, [ 'someone' ])
  .then(result => console.log('User with email %s', result.rows[0].email));