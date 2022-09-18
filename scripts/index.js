//Display current year
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.innerHTML = new Date().getFullYear();

//Display last modified date and time
let modified = document.getElementById("modified");
modified.innerHTML = new Date(document.lastModified);
