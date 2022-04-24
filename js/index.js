
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.innerHTML = new Date().getFullYear();

let datemodified = document.getElementById("modified");
modified.innerHTML = new Date(document.lastModified);