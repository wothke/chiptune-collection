# ChiptuneBlaster

Copyright (C) 2018 Juergen Wothke

This example shows how different backends can all be used on the same web page. A respective
live demo can be found here: https://www.wothke.ch/blaster

The code is somewhat more complex than what is needed to just use one specific backend - so if you're
interested in just using one specific backend, then you might rather want to use the simpler example code
from the respective backend-project as a starting point.


This project largely comes WITHOUT any music files and you'll have to bring your own (see 
"playlist configuration" in index.html). 


Also there are some backend specific file dependencies which are NOT delivered as part
of this project (to avoid potential copyright issues). You certainly have these files yourself
and in case you've recently misplaced them, Google will certainly come to the rescue.

Let me know in case there are additional files that might need to be removed due to 
copyright concerns.


## AdPlug
This backend depends on "res/insts.dat", "res/standard.bnk", "res/adplug.db" - which are 
available in this example. Certain songs may then also depend on "res/icepatch.003" (The limitation 
of the current implementation requires these files to be loaded BEFORE any song that depends on them.).

## Tiny'R'Sid
no dependencies

## ASAP
no dependencies

## VGM
This backend depends on "VGMPlay.ini" - which is available in this example. Certain songs may then 
require the additional "yrw801.rom" - which is NOT provided here.

## PSX
This backend depends on a Playstation2 ROM - which is NOT provided here. The example code
uses a compressed ROM file "PSX2ROM.gz" (i.e. you'd have to provide your own ROM file here).

## XMP
no dependencies

## UADE
This backend requires all the files that are provided in the "uade" sub-folder. CAUTION: 
For multi-file songs it is crucial that these are placed within the "uade/songs" sub-folder!

## sc68
This backend depends on the "replay" sub-folder - respective *.bin files are fetched on demand. 

## zxtune
no dependencies

## SNES
no dependencies
