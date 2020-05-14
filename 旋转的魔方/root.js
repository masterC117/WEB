
let pages=document.querySelectorAll(".box-page");
let img_index=0;
for (let page of pages){
    let img_url="\"img/a"+(img_index++)+".jpg\"";
    console.log(img_url);
    for(let r=0;r<3;r++){
        for(let c=0;c<3;c++){
            let divs=document.createElement("div");
            divs.className="page-item";
            divs.style.cssText= "background-image:url("+img_url+");" +
                "left:"+c*100+"px;" +
                "top:"+r*100+"px;" +
                "background-position:"+(-c*100)+"px "+(-r*100)+"px;" +
            page.appendChild(divs);
        }
    }
}
function loadXMLDoc()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("img1").src="../modi.jpg";
        }
    }
    xmlhttp.open("GET","test.txt",true);
    xmlhttp.send();
}