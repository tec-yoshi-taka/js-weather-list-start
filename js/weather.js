let city = 'tokyo';
const API_KEY = '5e030478e6d164977e9b5deaf8b5bec4';
let current_url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',jp&units=metric&APPID=' + API_KEY + '&lang=ja';
let forecast_url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + ',jp&units=metric&APPID=' + API_KEY + '&lang=ja';
function dateFormat(d) {
    const week = new Array("（日）", "（月）", "（火）", "（水）", "（木）", "（金）", "（土）");
    let month;
    if (d === undefined) {
        const date = new Date();
        date.setHours(date.getHours());
        month = date.getMonth() + 1;
        let day = month + "月" + date.getDate() + "日" + week[date.getDay()] + date.getHours() + "：" + date.getMinutes();
        return day;
    } else {
        const day = [];
        const date = new Date(d.replace(/-/g,"/"));
        // const date = new Date(d);
        date.setHours(date.getHours() + 9);
        month = date.getMonth() + 1;
        day[0] = month + "月" + date.getDate() + "日" + week[date.getDay()];
        day[1] = ('0' + date.getHours()).slice(-2) + "：00";
        newDate = day[0];
        if (oldDate === newDate) {
            day[0] = '';
        }
        oldDate = newDate;
        return day;
    }
}