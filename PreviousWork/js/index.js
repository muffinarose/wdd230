const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.innerHTML = new Date().getFullYear();

//let datemodified = new Date(document.lastModified);
//document.getElementById(modified).innerHTML;

let datemodified = document.getElementById("modified");
modified.innerHTML = new Date(document.lastModified);
//document.getElementById("modified").innerHTML = dateModified;