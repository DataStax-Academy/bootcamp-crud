#!/usr/bin/env python3      
from dse.cluster import Cluster
from dse.query import named_tuple_factory

class Connection:
    def __init__(self):
        self.ip_address='127.0.0.1'
        self.path_to_creds=''
        self.cluster = Cluster([self.ip_address])
        self.session = self.cluster.connect()
        self.session.row_factory = named_tuple_factory