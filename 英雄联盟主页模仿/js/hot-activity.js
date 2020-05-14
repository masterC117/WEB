import {act_content} from "./dataStore.js";
import {act_titles} from "./dataStore.js";
import {act_imgs} from "./dataStore.js";
import {act_texts} from "./dataStore.js";
import {act_times} from "./dataStore.js";

for(let i=0;i<act_titles.length;i++){

    act_titles[i].addEventListener("mouseenter",function () {
        clear_title_select();
        act_titles[i].className+=" act-title-selected";
        for(let j=0;j<act_imgs.length;j++){
            act_imgs[j].src=act_content[i][j][0];
        }
        for(let j=0;j<act_texts.length;j++){
            act_texts[j].innerText=act_content[i][j][1];
        }
        for(let j=0;j<act_times.length;j++){
            act_times[j].innerText=act_content[i][j][2];
        }
    });
}

function clear_title_select() {
    for(let title of act_titles){
        title.className="activity-title-li";
    }
}
