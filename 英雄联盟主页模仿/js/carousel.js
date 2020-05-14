import {carousel_title} from "./dataStore.js";
import {carousel} from "./dataStore.js";

let carousel_index=0;

for(let i=0;i<carousel_title.length;i++)
{
    carousel_title[i].index=i;
    carousel_title[i].addEventListener("mouseenter",function () {
        clear_select();
        display_item(this.index);
        carousel_index=this.index;
    })
}

carousel_move();
/*清楚轮播栏标题的选中样式*/
function clear_select() {
    for(let title of carousel_title)
    {
        title.className=title.className.replace(' select',"");
    }
}

function display_item(index) {
    let move_length=-820;
    carousel.style.marginLeft=String(move_length*index)+"px";
    carousel_title[index].className+=" select";
}
function carousel_move() {
    clear_select();
    display_item(carousel_index);
    carousel_index++;
    if(carousel_index>4)
        carousel_index=0;
    setTimeout(carousel_move,3000);
}