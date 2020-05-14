
/*顶部导航栏和导航栏子菜单*/
export const TopBar=document.getElementById("head");
export const subnav=document.getElementById("head-subnav");
export const nav=document.getElementById("head-nav");
export const app_dl=document.getElementById("client-dl");
export const app_dl_hover=document.getElementById("client-hover");


/*轮播图*/
export const carousel=document.getElementById("zoombox-part-one-carousel-list");
export const carousel_title=document.getElementsByClassName("carousel-title-item");

/*公告栏*/
export const notice_title=document.getElementsByClassName('newslist-title-item');
export const notice_type=document.getElementsByClassName('news-item-type-base');
export const notice_text=document.getElementsByClassName('news-item-href');
export const notice_time=document.getElementsByClassName("news-item-time");
export const notice_content=[
    [
        ['','10.9云顶之弈更新：新星系加入云顶'],
        ['公告','10.9版本更新公告：FPX冠军皮肤来袭！','04-29'],
        ['公告','FPX冠军荣耀宝箱活动即将上线','04-26'],
        ['视频','2020LPL春季总决赛品牌宣传片：此刻敬英雄','05-01'],
        ['新闻','送999皮肤基金 来游戏圈边看边聊春决','04-30'],
        ['公告','关于祖安大区开启冠军杯赛全量测试的说明','04-30'],
        ['赛事','回顾过去的7年，每一个捧起银龙杯的身影','04-30'],
    ],
    [
        ['','10.9云顶之弈更新：新星系加入云顶'],
        ['公告','10.9版本更新公告：FPX冠军皮肤来袭！','04-29'],
        ['公告','英雄联盟小长假活动预告','04-28'],
        ['公告','FPX冠军荣耀宝箱活动即将上线','04-26'],
        ['公告','百万云顶攻擂王挑战阶段入选名单公示','05-01'],
        ['公告','关于祖安大区开启冠军杯赛全量测试的说明','04-30'],
        ['公告','5月1日免费英雄更新公告','04-29'],
    ],
    [
        ['','2020LPL春季总决赛品牌宣传片：此刻敬英雄'],
        ['视频','敬英雄：天才中单黄金左手Knight','05-01'],
        ['视频','【LPL春季总决赛应援曲】-将军之英雄重返战场','05-01'],
        ['赛事','LPL历届春季决赛回顾 七年时光铸就英雄','04-30'],
        ['赛事','回顾过去的7年，每一个捧起银龙杯的身影','04-30'],
        ['视频','选手靠谱时刻：主播复盘历届春决回顾','04-30'],
        ['视频','用湖南卫视的方式打开LPL春季总决赛','04-30'],
    ],
    [
        ['','10.9云顶更新详解 源计划领衔三大上分阵容'],
        ['教学','10.9斗枪重回巅峰 云顶新三大S级阵容','04-30'],
        ['新闻','【琉璃S3攻略】琴女领衔新版女团','04-29'],
        ['视频','云顶之巅：灌篮收割术 无缝五连砍，神超 黄金男团重登国服第一','04-28'],
        ['视频','云顶棋弈研习社，经典斗枪王者归来，详细教学','04-27'],
        ['教学','红莲上分利器未来狙神 无限控制爆锤主流阵容','04-27'],
        ['教学','苏泽盲僧超实用打野教学再也不担心买了冠军皮肤不会玩！','04-27'],
    ],
    [
        ['','TheShy道歉登上热搜 夏季赛iG能否重现全员恶人？'],
        ['赛事','FPX赛后群访 Lwx：抢到大龙后说“Nice，快跑！”','04-29'],
        ['娱乐','季军赛iG不敌FPX落败，Rookie发微博获粉丝暖心鼓励','04-29'],
        ['赛事','Reddit网友热议季军赛：希望在夏天看到的不仅仅是亚托克斯','04-29'],
        ['赛事','Uzi合约4月30日将到期 是去是留仍未可知','04-29'],
        ['赛事','LCK保级赛第二日预告：SB、GRF迎来“生死局”','04-29'],
        ['赛事','FPX的春季赛结局：当世界冠军再次面临涅槃重生','04-29'],
    ],
];

/*活动栏*/
export const act_titles=document.getElementsByClassName("activity-title-li");
export const act_imgs=document.getElementsByClassName("activity-content-li-img");
export const act_texts=document.getElementsByClassName("activity-content-li-p");
export const act_times=document.getElementsByClassName("activity-content-li-a1");
export const act_content=[
    [
        ["images/act-pic1.jpg","全场半价","3天后结束"],
        ["images/act-pic2.jpg","解锁冠军荣耀宝箱，领永久皮肤奖励","3天后结束"],
        ["images/act-pic3.jpg","微信话题有奖活动","3天后结束"],
        ["images/act-pic4.jpg","LPL周边特惠","3天后结束"],
    ],
    [
        ["images/act-pic5.jpg","黯晶2020","长期活动"],
        ["images/act-pic6.jpg","小小英雄第四系列","长期活动"],
        ["images/act-pic7.jpg","集火凤凰，凤鸣四方","长期活动"],
        ["images/act-pic8.jpg","峡谷勇者2020","长期活动"],
    ],
    [
        ["images/act-pic9.jpg","LPL×Nike联名队服","长期活动"],
        ["images/act-pic10.jpg","十周年最强福利","长期活动"],
        ["images/act-pic11.jpg","英雄联盟信誉分查询","长期活动"],
        ["images/act-pic12.jpg","《校园解说大赛》等你发声","长期活动"],
    ],
];
/*侧边栏、版本导航栏*/
export const rightNav=document.getElementById("rightnav-bar-ul");
export const btn_returnTop=document.getElementById("btn-returnTop");
export const free_hero=document.getElementById("version-part-four");
export const free_hero_hover=document.getElementById("version-part-four-hover");