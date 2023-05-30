/* Chataigne Module for SpatGRIS v1.0 (c) Mathieu Delquignies, 5/2023
===============================================================================
This file is a Chataigne Custom Module to test and map objects metadatas from ControllerGRIS, or send objects metadatas to SpatGRIS.
Tested with v1.4.1 ControllerGRIS plugin, and SpatGRIS 3.2.9.

To learn more about SpatGRIS, please check :
http://gris.musique.umontreal.ca/

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
===============================================================================
*/

/**
 *  GLOBAL VARIABLES
 *  objects parameters pointers
 */
var x = [];
var y = [];
var z = [];
var a = [];
var e = [];
var r = [];
var hSpan = [];
var vSpan = [];

/** 
 * Module intialisation
 */
function init()
{
	// Create the Objects container
	createObjectsContainer();

	// Module GUI settings
	local.scripts.setCollapsed(true);
}

/**
 * Callback when a module parameter has changed
 */
function moduleParameterChanged(param)
{
	if(param.isParameter())
	{
		// the only parameter is Number of ojects, when it changes, update Objects container with the right amount of values
		createObjectsContainer();
	}
}

/**
 * Callback on OSC Rx to parse OSC message
*/
function oscEvent(address, args)
{
	//param "address" is the address of the OSC Message
	// Rx SpatGRIS object positions
	if (address=="/spat/serv")
	{
		if(args[0]=="pol") // polar object in radians
		{
			a[args[1]].set(args[2]);
			e[args[1]].set(args[3]);
			r[args[1]].set(args[4]);
			hSpan[args[1]].set(args[5]);
			vSpan[args[1]].set(args[6]);
		}
		if(args[0]=="deg") // polar object in degrees
		{
			a[args[1]].set(args[2]);
			e[args[1]].set(args[3]);
			r[args[1]].set(args[4]);
			hSpan[args[1]].set(args[5]);
			vSpan[args[1]].set(args[6]);
		}
		if(args[0]=="car") // cartesian object
		{
			x[args[1]].set(args[2]);
			y[args[1]].set(args[3]);
			z[args[1]].set(args[4]);
			hSpan[args[1]].set(args[5]);
			vSpan[args[1]].set(args[6]);
		}
		if(typeof(args[0])=="number") // default object starting at 0 ? Only five parameters, not documented
		{
			a[args[0]+1].set(args[1]);
			r[args[0]+1].set(args[2]);
			e[args[0]+1].set(args[3]);
			hSpan[args[0]+1].set(args[4]);
			vSpan[args[0]+1].set(args[5]);
		}
	}
}


/**
 * Reset the objects container depending on Number of objects module parameter
 */
function createObjectsContainer()
{
	// Remove previous source container
  	local.values.removeContainer("Objects parameters");
	// Add the Source container
  	ObjectsContainer = local.values.addContainer("Objects parameters");
	// Get the number of objects to create
	var NbObjects = local.parameters.numberOfObjects.get();

	// Add X container & values for cartesian X position
	xContainer = ObjectsContainer.addContainer("x");
	for (var i = 1; i < (NbObjects +1); i++) {
    	x[i]= xContainer.addFloatParameter(i, "x", 0, -2, 2);
		x[i].setAttribute("readonly", true);
    	};
    xContainer.setCollapsed(true);

	// Add Y container & values for cartesian Y position
	yContainer = ObjectsContainer.addContainer("y");
	for (var i = 1; i < (NbObjects +1); i++) {
		y[i]= yContainer.addFloatParameter(i, "y", 0, -2, 2);
		y[i].setAttribute("readonly", true);
		};
	yContainer.setCollapsed(true);

	// Add Z container & values for cartesian altitude
	zContainer = ObjectsContainer.addContainer("z");
	for (var i = 1; i < (NbObjects +1); i++) {
		z[i]= zContainer.addFloatParameter(i, "z", 0, -2, 2);
		z[i].setAttribute("readonly", true);
		};
	zContainer.setCollapsed(true);

	// Add A container & values for polar azimuth
	aContainer = ObjectsContainer.addContainer("a");
	for (var i = 1; i < (NbObjects +1); i++) {
		a[i]= aContainer.addFloatParameter(i, "a", 0, -3, 3);
		a[i].setAttribute("readonly", true);
		};
	aContainer.setCollapsed(true);

	// Add E container & values for polar elevation
	eContainer = ObjectsContainer.addContainer("e");
	for (var i = 1; i < (NbObjects +1); i++) {
		e[i]= eContainer.addFloatParameter(i, "e", 0, -2, 2);
		e[i].setAttribute("readonly", true);
		};
	eContainer.setCollapsed(true);

	// Add R container & values for polar radius
	rContainer = ObjectsContainer.addContainer("r");
	for (var i = 1; i < (NbObjects +1); i++) {
		r[i]= rContainer.addFloatParameter(i, "r", 0, -3, 3);
		r[i].setAttribute("readonly", true);
		};
	rContainer.setCollapsed(true);

	// Add HSPAN container & values for horizontal span
	hSpanContainer = ObjectsContainer.addContainer("h Span");
	for (var i = 1; i < (NbObjects +1); i++) {
		hSpan[i]= hSpanContainer.addFloatParameter(i, "h span", 0, 0, 1);
		hSpan[i].setAttribute("readonly", true);	
		};
	hSpanContainer.setCollapsed(true);

	// Add HSPAN container & values for vertical span
	vSpanContainer = ObjectsContainer.addContainer("v Span");
	for (var i = 1; i < (NbObjects +1); i++) {
		vSpan[i]= vSpanContainer.addFloatParameter(i, "v span", 0, 0, 1);
		vSpan[i].setAttribute("readonly", true);	
		};
	vSpanContainer.setCollapsed(true);
}

/**
 * Callback functions for module commands
 * 
 * As described in "SpatGRIS 3.2.9 Manual.pdf"
 * http://gris.musique.umontreal.ca/
 */

/**
 * pol moves a source using polar coordinates in radians.
 * #parameter type allowed values meaning:
 * 1 string pol -
 * 2 int [1, 128] Source index
 * 3 float any azimuth angle
 * 4 float any elevation angle
 * 5 float [-3.0, 3.0] radius
 * 6 float [0, 1] Horizontal span
 * 7 float [0, 1] Vertical span
 *
 * ex : The message /spat/serv pol 7 0.0 0.78 0.5 0.1 0.2 moves the source #7 in the front at half elevation and placed at
 * half the distance from the origin, with an horizontal span of 10% and a vertical span of 20%.
 */
function pol(sourceIndex, azimuthAngle, elevationAngle, radius, hSpan, vSpan) 
{
	local.send("/spat/serv", "pol", sourceIndex, azimuthAngle, elevationAngle, radius, hSpan, vSpan );
}

/**
 * deg moves a source using polar coordinates in degrees.
 * index type allowed values meaning
 * 1 string deg -
 * 2 int [1, 128] Source index
 * 3 float any azimuth angle
 * 4 float any elevation angle
 * 5 float [-3.0, 3.0] radius
 * 6 float [0, 1] Horizontal span
 * 7 float [0, 1] Vertical span
 * 
 * ex : The message /spat/serv deg 7 -90.0 45.0 0.5 0.1 0.2 moves the source #7 at the extreme left, at half elevation and
 * half the distance of the space, with an horizontal span of 10% and a vertical span of 20%.
 */
function deg(sourceIndex, azimuthAngle, elevationAngle, radius, hSpan, vSpan) 
{
	local.send("/spat/serv", "deg", sourceIndex, azimuthAngle, elevationAngle, radius, hSpan, vSpan );
}

/**
 * car moves a source using Cartesian coordinates.
 * index type allowed values meaning
 * 1 string car -
 * 2 int [1, 128] Source index
 * 3 float [-1.66, 1.66] x (left/right)
 * 4 float [-1.66, 1.66] y (back/front)
 * 5 float [-1.66, 1.66] z (down/up)
 * 6 float [0, 1] Horizontal span
 * 7 float [0, 1] Vertical span
 * 
 * ex : The message /spat/serv car 7 1.0 1.0 1.0 0.0 0.0 moves the source #7 at the top right corner, with no horizontal
 * or vertical spans.
 */
function car(sourceIndex, x, y, z, hSpan, vSpan) 
{
	local.send("/spat/serv", "pol", sourceIndex, x, y, z, hSpan, vSpan );
}

/**
 * clr clears a source's position.
 * index type allowed values meaning
 * 1 string clr clear
 * 2 int [1, 128] Source index
 * 
 * ex : The message /spat/serv clr 7 clears the seventh source's position.
 */
function clr(sourceIndex)
{
	local.send("/spat/serv", "clr", sourceIndex);
}

/**
 * alg sets a source's hybrid spatialization mode.
 * index type allowed values meaning
 * 1 string alg -
 * 2 int [1, 128] Source index
 * 3 string dome or cube Algorithm
 * 
 * ex : The message /spat/serv alg 7 cube sets the seventh source's spatialization algorithm to "cube" (only works in hybrid
 * mode).
 */
function alg(sourceIndex, algorithm)
{
	local.send("/spat/serv", "alg", algorithm);
}