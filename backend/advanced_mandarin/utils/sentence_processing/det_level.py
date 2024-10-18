#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
import segmentation
import os

def det_level(sentence: str) -> int:
    level_list = []
  
    project_root = os.path.dirname(__file__)
    json_path = os.path.join(project_root, 'data', 'levels.json')

    seg_sentence = segmentation.segment(sentence)
    
    with open(json_path, 'r', encoding='utf-8') as levels_file:
        levels = json.load(levels_file)

    for i in levels.keys():
        if i in seg_sentence:
            level_list.append(levels[i])

    if len(level_list) == 0:
        return 0
    
    return round(sum(level_list) / len(level_list))