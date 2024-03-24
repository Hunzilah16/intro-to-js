var name =prompt("what is your name");
var firstchar = name.slice(0,1);
var firstcharupp = firstchar.toUpperCase(); 

var restname = name.slice(1,name.length);

restname = restname.toLowerCase();

var change = firstcharupp+restname;

alert ("hellow " + change)
