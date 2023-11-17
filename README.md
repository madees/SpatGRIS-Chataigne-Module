# SpatGRIS-OSC-Chataigne-Module
Chataigne module to retreive parameters or control SpatGRIS object based audio (OBA) software renderer with OSC protocol.  

To know more about the free and open source SpatGRIS immersive solution, please consult the user manual and website :
http://gris.musique.umontreal.ca/

You can download software and manual here :
https://sourceforge.net/projects/spatgris3/

And sources :
https://github.com/GRIS-UdeM/SpatGRIS

! NOTE : This is a personal initiative, not officially suported by GRIS.

For global support on how to use Chataigne and its modules, please visit the forum : 
http://benjamin.kuperberg.fr/chataigne/forum 

or join us on Discord : 
https://discord.com/invite/ngnJ5z my contact there is also "madees".

## Installation
To install the Module, use the integrated Chataigne's Community Modules Manager or download and unzip files to your Documents/Chataigne/Modules folder.

## Principle of use
First set IP's, ports if they are not ControlGRIS default in /modules/SpatGris/parameters.

The objects container receive values sent by ControlGRIS software plugin.
Select the number of objects to store in values containers with /modules/SpatGRIS/parameters/numberOfObjects.
They are organised to ease multiplex mappings : you can automatically build list with "Fill... from Container".

This may be used to replace SpatGRIS renderer with another OBA renderer, multiplex mappings should be the easy way.
If you want to render at the same time with SpatGRIS, the module "pass-through" to itself will do with ease.
You may also use the Module Commands in mappings to send parameters directly to SpatGRIS renderer, if objects editor used for production is different from ControlGRIS, or you want to add some other objects controls from thirds.
