var menuIcon=document.querySelector("#drop-down-menu");
var sidebar=document.querySelector(".side-bar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("toggled-sidebar");
    container.classList.toggle("large-container");
}