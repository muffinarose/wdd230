const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.innerHTML = new Date().getFullYear();

const datemodified = document.lastModified;
datemodified = new Date(datemodified)
document.getElementById("modified").innerHTML() = dateModified;