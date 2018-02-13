# Chiptune collection

Copyright (C) 2018 Juergen Wothke

This project provides the precompiled versions of all my WebAudio based chiptune
players (see my other projects). It allows to fetch a consistent and up-to-date
set without having to build the stuff yourself.

* 'library' folder contains the respective pre-built components
* 'blaster' folder provides an example web page showing the use of the components


Note: Some of the backend components in the 'library' at runtime depend on additional 
resources (config files). Respective data is not provided in the 'library' but it might 
be found in the 'blaster' example code.

## License
License information of the respective underlying projects applies!

Technically this convenience package DOES NOT exist ;-) This is due to GPL's braindead 
licensing model, which prohibits GPL stuff to be distibuted together with NON-GPL stuff. 
Eventhough many of the backends are GPL, the base infrastructure player is not - nor is the
"C64 backend" (which both use a "Creative Commons BY-NC-SA" licence). GPL purists should 
probably rather not use this convenience package - or first check if all their used 
OS/driver and web-browser code is actually GPL too..

