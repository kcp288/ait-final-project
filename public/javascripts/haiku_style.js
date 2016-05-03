var navbar = document.getElementById("navbar");
var parent = navbar.parentNode;
parent.removeChild(navbar);

var title = document.getElementById("nlp");
console.log(title);
title.innerHTML = "NLP Final";



var button = document.getElementsByClassName("btn btn-primary btn-lg");
console.log(button[0]);
button[color].style= "5533ff";