#!/bin/bash
# Assumes j2slib.zip from git is in ../
diff -u <(zipinfo -1 ../j2slib.zip | sort) <(zipinfo -1 sources/net.sf.j2s.lib/j2slib.zip | sort)
