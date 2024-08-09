# -*- coding: utf-8 -*-
"""
Created on Sun May 19 00:38:33 2024

@author: Jonathan
"""

def query_set(int_level, table):
    table.objects.all().filter(level=int_level)
    