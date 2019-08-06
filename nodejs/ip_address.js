const dse = require('dse-driver');

function init_connection(){
    var connection = {}
    connection.ip_address = '127.0.0.1';
    connection.path_to_creds=''
    connection.client = new dse.Client({ contactPoints: [connection.ip_address], localDataCenter: 'Cassandra' });
    return connection
}


module.exports = init_connection;