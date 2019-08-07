#!/usr/bin/env python3
from ip_address import Connection

# this is a delete statement in python
connection = Connection()
output = connection.session.execute(
    "DELETE FROM crud.users WHERE first_name = %s",
    ('Bob',)
)
print(output)
connection.close()