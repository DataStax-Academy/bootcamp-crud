#!/usr/bin/env python3
from ip_address import Connection

# this is a delete statement in python
connection = Connection()
output = connection.session.execute("DELETE FROM crud.users WHERE name = BOB")
print(output)