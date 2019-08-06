#!/usr/bin/env python3

# this is a insert statement in python
from dse.cluster import Cluster, ExecutionProfile, EXEC_PROFILE_DEFAULT
from dse.query import tuple_factory

# cluster = Cluster([127.0.0.1])
# session = cluster.connect()

# print session.execute("INSERT INTO crud.users (first_name,last_name,age) VALUES (BOB,BOBERSON,21)")[0]