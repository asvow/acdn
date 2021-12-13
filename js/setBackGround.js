window.onload=function(){
    const jsdURL = "https://cdn.jsdelivr.net/gh/asvow/ACDN@daily/"
    var panelCover = document.getElementById("panel-cover");
    var date = new Date();
    var rndNum = Math.floor(Math.random() * 10).toString();
    date.setDate(date.getDate() - rndNum);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var time = year.toString();
    if(month < 10)
        time += "0";
    time += month;
    if(day < 10)
        time += "0";
    time += day;
    var destURL = jsdURL + time + ".jpg";
    panelCover.setAttribute("style" ,"background-image: url('" + destURL + "')");
  };