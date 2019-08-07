#!/usr/bin/env bash
$CURRENT_DIR = pwd

cqlsh -f CURRENT_DIR`/schema.cql`