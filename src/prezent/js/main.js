const css = require('../css/main.scss');

var webDev = document.querySelector('#web');
var money = document.querySelector('#money');
var me = document.querySelector('#me');
var htmlpar = document.querySelector('#html');
var pic = document.querySelector(".pic");
var image = document.createElement('img');
webDev.onclick = function (e){
    pic.innerHTML = "";
    image.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/originals/6d/1b/db/6d1bdbac086940b4c5a526ee8cbc4345.png' )
    pic.appendChild(image);
};

money.onclick = function (e){
    pic.innerHTML = "";
    image.setAttribute('src', 'https://kiwicdn.akamaized.net/7c43/GLzv6MmQ4qjYnRgi56pvok_979.jpg');
    image.style.width="400px";
    pic.appendChild(image);
};

me.onclick = function (e){
    pic.innerHTML = "";
    image.setAttribute('src', 'http://blogs.hrhero.com/oswaldletters/wp-content/blogs.dir/10/files/2013/07/Cooperation.jpg');
    image.style.width="400px";
    pic.appendChild(image);
};

htmlpar.onclick = function (e){
    pic.innerHTML = "";
    image.setAttribute('src', 'http://zametkinapolyah.ru/wp-content/uploads/2016/07/html.png');
    image.style.width="400px";
    pic.appendChild(image);
};