var value = prompt("Введите желаемый объем памяти: 64 256 512");
var color = prompt("Введите желаемый цвет: Silver, Space gray, Gold");
var price = 0;

if (value == 64) {
    price = 999;
}
if (value == 256) {
    price = 1149;
}
if (value == 512) {
    price = 1349;
}
if (value != 64 && value != 256 && value != 512) {
    price = 'Введено неверное значение объема памяти';
}
if (color == 'Silver') {
    document.getElementById('ex2').innerHTML = "<img src=\"img/silver.png\">";
}
if (color == 'Space gray') {
    document.getElementById('ex2').innerHTML = "<img src=\"img/iphone-xs-max-space-select-2018.png\">";
}
if (color == 'Gold') {
    document.getElementById('ex2').innerHTML = "<img src=\"img/iphone-xs-gold-select-2018.png\">";
}
if (color != 'Silver' && color != 'Space gray' && color != 'Gold') {
    color = "Неверное значение";
    document.getElementById('ex2').innerHTML = "<img src=\"img/iphone-xs-max-space-select-2018.png\">";
}
document.getElementById('ex').innerHTML = "<HR>" +
    "Вы выбрали версию на: " + value + "Gb Цвет: " + color;
document.getElementById('ex1').innerHTML = "<HR>" +
    "Стоимость версии: $" + price + "<HR>";
alert("Стоимость версии: $" + price);