#!/usr/bin/env python3

# this is a insert statement in python
from dse.cluster import Cluster, ExecutionProfile, EXEC_PROFILE_DEFAULT
from dse.query import tuple_factory
from ip_address import connection

cluster = Cluster([connection.ip_address])
# session = cluster.connect()

# print session.execute("INSERT INTO crud.users (first_name,last_name,age) VALUES (BOB,BOBERSON,21)")[0]