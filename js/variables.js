var gameZone = null; // блок с игровым полем
var content = document.querySelector("#content"); //выбираем блок content
var player = null; // блок с нашим игроком
var enemy = null; // блок с врагом

var info = document.querySelector("#info"); //выбираем блок info
var lifes = null; // блок с жизнями
var stars = null;
var countStar = 0;
var countLifes = 3; // количество жизней
var starsFlower = document.querySelector("#flower-stars"); //выбираем блок flower-stars, с картинкой


var startKnopka = document.querySelector("#start-knopka"); // блок старта игры
var startBlock = null; // блок старта игры

var endGame = null; // блок окончания игры
var reloadKnopka = null; // кнопка перезагрузки

var lets = null; // блок препятствий
var letq = null; // блок препятствий
var letw = null; // блок препятствий
var lete = null; // блок препятствий
var letr = null; // блок препятствий
var lett = null; // блок препятствий
var lety = null; // блок препятствий
var letu = null; // блок препятствий
var leti = null; // блок препятствий
var house = null; // домик игрока