import {notice_content} from "./dataStore.js";
import {notice_time} from "./dataStore.js";
import {notice_text} from "./dataStore.js";
import {notice_type} from "./dataStore.js";
import {notice_title} from "./dataStore.js";

for(let i=0;i<notice_title.length;i++)
{
    notice_title[i].addEventListener("mouseenter",function () {
        clear_type();
        clear_title_select();
        this.className+=" newslist-title-selected";
        for (let j=0;j<notice_type.length;j++)
        {
            notice_type[j].innerText=notice_content[i][j+1][0];
            switch (notice_content[i][j+1][0]){
                case "公告":
                    notice_type[j].className+=" news-item-type-inform";
                    break;
                case "视频":
                    notice_type[j].className+=" news-item-type-video";
                    break;
                case "赛事":
                    notice_type[j].className+=" news-item-type-match";
                    break;
                case "教学":
                    notice_type[j].className+=" news-item-type-teach";
                    break;
                case "新闻":
                    notice_type[j].className+=" news-item-type-news";
                    break;
                case "娱乐":
                    notice_type[j].className+=" news-item-type-fun";
                    break;
            }
        }
        for(let j=0;j<notice_text.length;j++){
            notice_text[j].innerText=notice_content[i][j][1];
        }
        for(let j=0;j<notice_time.length;j++){
            notice_time[j].innerText=notice_content[i][j+1][2];
        }
    });
}
function clear_title_select() {
    for(let item of notice_title){
        item.className="newslist-title-item";
    }
}

function clear_type() {
    for(let item of notice_type){
        item.className="news-item-type-base";
    }
}


