const cassandra = require('cassandra-driver');


function init_connection(){
    var connection = {}
    connection.ip_address = '127.0.0.1';
    connection.dc = 'Cassandra'
    connection.path_to_creds=''
    connection.client = new cassandra.Client({ 
        contactPoints: [connection.ip_address],
        localDataCenter: connection.dc 
    });
    return connection
}

connection = init_connection()

module.exports = connection;