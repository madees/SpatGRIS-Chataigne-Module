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
To install the Custom Module, download and unzip files to your Documents/Chataigne/Modules folder.

## Principle of use
First set IP's, ports if they are not ControlGRIS default in /modules/SpatGris/parameters.

The objects container receive values sent by ControlGRIS software plugin.
Select the number of objects to store in values containers with /modules/SpatGRIS/parameters/numberOfObjects.
They are organised to ease multiplex mappings : you can automatically build list with "Fill... from Container".

This may be used to replace SpatGRIS with another OBA renderer, or, if ControlGris is set with broadcast IP, to send its parameters to both SpatGRIS and Chataigne module at the same time.

You may also use Module Commands to send parameters to SpatGRIS renderer, if objects editor used for production is different from ControlGRIS.

If you want to retreive or control ControlGris plugin, you should instead use ControlGRIS Chataigne module.
