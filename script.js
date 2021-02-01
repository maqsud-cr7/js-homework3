// ----------------  Задание 1 ----------------

while (isNaN(num) || num == 0) {
  var num = +prompt("Введите число")
}

var deg = +prompt("Введите степень числа")
if (isNaN(deg) || deg == 0) {
  deg=2
}

var total = 1
for (let i = 0; i < deg; i++) {
  total *= num
}

console.log(total); 

// ----------------  Задание 2 ----------------

do {
  var num = +prompt("Введите количество ступеней")
} while (isNaN(num) || num == 0 || num == null);
do {
 var symb = prompt("Введите символ отступов");
} while (symb == 0 );
do {
var finalSymb = prompt("Введите конечный символ");
} while (finalSymb == 0);

var total = ''
for (let i = 0; i < num; i++) {
 total = total + symb;
 console.log(total+finalSymb); 
}