const dse = require('dse-driver');

function init_connection(){
    var connection = {}
    connection.ip_address = '127.0.0.1';
    connection.dc = 'Cassandra'
    connection.path_to_creds=''
    connection.client = new dse.Client({ 
        contactPoints: [connection.ip_address],
        localDataCenter: connection.dc 
    });
    return connection
}

connection = init_connection()
console.log(connection.client.connected)

module.exports = connection;