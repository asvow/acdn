window.onload=function(){
    const panelCover = document.getElementById("panel-cover");
    const rndNum = Math.floor(Math.random()*8);
    const url = "/img?format=js&idx=" + rndNum +"&n=1&setmkt=zh-cn&setlang=zh-cn";
    $.ajax({
        url: url,
        dataType: "json",
        success: function (data) {
            const destURL = 'https://www.bing.com' + data.images[0].url;
            panelCover.setAttribute("style" ,"background-image: url('" + destURL + "')");
        }
    });
};