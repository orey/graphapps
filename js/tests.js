//---------------------------------------------
// Test GraphApps core
// Author: O. Rey
// Date: April 27 2019
// License: Apache 2
//---------------------------------------------

'use strict';

const ga = require('./graphapps');



function test_Entity(){
    var e = new ga.Entity(12);
    myprint(e);
}

function myprint(o){
    if (typeof o === 'object')
	console.log(JSON.stringify(o));
    else
	console.log(o);
}

function test_all(){
    test_Entity();
}

test_all();

