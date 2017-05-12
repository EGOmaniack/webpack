var webDev = document.querySelector('#web');
var money = document.querySelector('#money');
var me = document.querySelector('#me');
var htmlpar = document.querySelector('#html');
var pic = document.querySelector(".pic");

webDev.onclick = function (e){
    pic.innerHTML = "";
    pic.innerHTML = "<img src='https://s-media-cache-ak0.pinimg.com/originals/6d/1b/db/6d1bdbac086940b4c5a526ee8cbc4345.png'></img>";
};

money.onclick = function (e){
    pic.innerHTML = "";
    pic.innerHTML = "<img style='width: 700px' src='https://kiwicdn.akamaized.net/7c43/GLzv6MmQ4qjYnRgi56pvok_979.jpg'></img>";
};

me.onclick = function (e){
    pic.innerHTML = "";
    pic.innerHTML = "<img style='width: 400px' src='http://blogs.hrhero.com/oswaldletters/wp-content/blogs.dir/10/files/2013/07/Cooperation.jpg'></img>";
};

htmlpar.onclick = function (e){
    pic.innerHTML = "";
    pic.innerHTML = "<img style='width: 400px' src='http://zametkinapolyah.ru/wp-content/uploads/2016/07/html.png'></img>";
};