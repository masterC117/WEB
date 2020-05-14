import {rightNav,btn_returnTop} from "./dataStore.js";
import {free_hero,free_hero_hover,TopBar} from "./dataStore.js";

let quit_flag=0;
btn_returnTop.onclick=returnTop;
window.onscroll=function () {
    let  currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll>0){

        TopBar.style.background="rgba(0,0,0,0.5)";
        TopBar.style.position="fixed";
    }
    else{
        TopBar.style.removeProperty("background");
    }
    if(currentScroll>300){
        //console.log("当前滑条高度:"+currentScroll);
        rightNav.style.height="375px";
    }
    else{
        rightNav.style.height="305px";
    }
};

function returnTop() {
    let  currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(returnTop);
        window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}
free_hero.onmouseenter=function(event){
    event.preventDefault();
    event.stopPropagation();
    free_hero_hover.style.display="block";
};
free_hero.onmouseleave=function(event){
    event.preventDefault();
    event.stopPropagation();
    let timeout=setTimeout(function () {
        if(!quit_flag){
           free_hero_hover.style.display="none";
        }
    },200);
};
free_hero_hover.onmouseenter=function (event) {
    quit_flag=1;
    event.preventDefault();
    event.stopPropagation();
    this.style.display="block";
};
free_hero_hover.onmouseleave=function (event) {
    event.preventDefault();
    event.stopPropagation();
    quit_flag=0;
    this.style.display="none";
};