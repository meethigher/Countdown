$(function(){
        let rand=Math.floor(Math.random()*4050);
        let randIm="https://wallpaper.infinitynewtab.com/wallpaper/"+rand+".jpg";
        document.body.style.backgroundImage="url("+randIm+")";
        console.log(randIm);
});
$(function (){
    function timer(timestamp) {
        let week = 0, day = 0, hour = 0, minute = 0, second = 0;
        if (timestamp > 0) {
            week = Math.floor(timestamp / (60 * 60 * 24 * 7));
            day = Math.floor(timestamp / (60 * 60 * 24)) - (week * 7);
            hour = Math.floor(timestamp / (60 * 60)) - (week * 7 * 24) - (day * 24);
            minute = Math.floor(timestamp / 60) - (week * 7 * 24 * 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(timestamp) - (week * 7 * 24 * 60 * 60) - (day * 24 * 60 * 60) - (hour * 60 * 60)-(minute*60);
        }
        if(week<=9) week='0'+week;
        if(day<=9) day='0'+day;
        if(hour<=9) hour='0'+hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $("#w").text(week);
        $("#d").text(day);
        $("#h").text(hour);
        $("#m").text(minute);
        $("#s").text(second);
    }
    //输入目标时间
    let timeTarget="2019-01-09 15:10:00";
    window.setInterval(function (){
        res=Math.floor(Date.parse(new Date(timeTarget))/1000-Date.now()/1000);
        timer(res);
    },1000);
});
