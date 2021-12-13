function show_date_time(){
    var ages = moment.preciseDiff(moment(), moment(20210808, "YYYYMMDD"));
    ages = ages.replace(/years?/, "年");
    ages = ages.replace(/months?/, "月");
    ages = ages.replace(/days?/, "天");
    ages = ages.replace(/hours?/, "小时");
    ages = ages.replace(/minutes?/, "分");
    ages = ages.replace(/seconds?/, "秒");
    ages = ages.replace(/\s+/g, "");
    Ages.innerHTML="已在此等候"+ages+" ≡ω≡ ";
}
show_date_time();
setInterval("show_date_time()", 1000)