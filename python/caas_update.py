#!/usr/bin/env python3
from ip_address import Connection

# this is a update statement in python
connection = Connection()
output = connection.session.execute(
    "UPDATE crud.users SET age = %s WHERE first_name = %s",
    (30,'Bob')
)
print(output)
connection.close()