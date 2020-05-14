import {subnav} from "./dataStore.js";
import {nav} from "./dataStore.js";
import {app_dl} from "./dataStore.js";
import {app_dl_hover} from "./dataStore.js";

let quit_flag=0;

nav.onmouseenter = function (event) {
    event.preventDefault();
    event.stopPropagation();

    subnav.style.display = "block";
};
nav.onmouseleave=function (event) {
    event.preventDefault();
    event.stopPropagation();
    subnav.style.display="none";
};
subnav.onmouseenter=function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.display="block";
};
subnav.onmouseleave=function (event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.display="none";
};
app_dl.onmouseenter=function(event){
    event.preventDefault();
    event.stopPropagation();
    app_dl_hover.style.display="block";
};
app_dl.onmouseleave=function(event){
    event.preventDefault();
    event.stopPropagation();
    let timeout=setTimeout(function () {
        if(!quit_flag){
            app_dl_hover.style.display="none";
        }
    },200);
};
app_dl_hover.onmouseenter=function (event) {
    quit_flag=1;
    event.preventDefault();
    event.stopPropagation();
    this.style.display="block";
};
app_dl_hover.onmouseleave=function (event) {
    event.preventDefault();
    event.stopPropagation();
    quit_flag=0;
    this.style.display="none";
};