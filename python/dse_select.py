#!/usr/bin/env python3
from ip_address import Connection

# this is a select statement in python
connection = Connection()
output = connection.session.execute("SELECT * FROM crud.users WHERE name = BOB")[0]
print(output)