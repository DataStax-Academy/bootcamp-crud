#!/usr/bin/env python3
from ip_address import Connection

# this is a insert statement in python
connection = Connection()
output = connection.session.execute(
    "INSERT INTO crud.users (first_name,last_name,age) VALUES (%s, %s, %s)",
    ('Bob', 'Boberson', 21)
)
print(output)
connection.close()