#!/usr/bin/env python3
from ip_address import Connection

# this is a select statement in python
connection = Connection()
output = connection.session.execute("SELECT * FROM crud.users")
for row in output:
    print(row)
connection.close()