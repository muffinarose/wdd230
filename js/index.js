
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.innerHTML = new Date().getFullYear();

let modified = document.getElementById("modified");
modified.innerHTML = new Date(document.lastModified);