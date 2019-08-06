
CREATE KEYSPACE crud WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'Cassandra'  : 1 };

CREATE TABLE crud.users (
  first_name text,
  last_name text,
  age int,
  PRIMARY KEY (first_name)
);