#!/usr/bin/env python3

# # this is a delete statement in python
from dse.cluster import Cluster, ExecutionProfile, EXEC_PROFILE_DEFAULT
from dse.query import tuple_factory
from ip_address import connection

cluster = Cluster([connection.ip_address])
# session = cluster.connect()

# print session.execute("DELETE FROM crud.users WHERE name = BOB")[0]