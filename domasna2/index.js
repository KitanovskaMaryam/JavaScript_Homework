let number = '';
let i = 0;
while (i < 10){
          number += ' Brojot e ' + i + "<br />";
          i++;
}
document.write(number);

document.write("<br />")

let number1 = '';
let u = 23;

while (u >= 4){
          number1 += ' Brojot e ' + u + "<br />";
          u--;
}

document.write(number1);

document.write("<br />")

let even = 1;

while(even <= 100){
          if(even % 2 == 0)
                    document.write(even + "<br />");
          even++;
}

document.write("<br />")

let x = prompt('Vnesi vrednost');
document.write('Promenlivata koja ja vnesovte e ' + x);


while (x !== 5) {
         x = prompt('Vnesi go brojot 5');
         if( x == 5){
          break;
         }
}

document.write("<br />");
document.write("Tocno, promenlivata koja ja vnesovte e 5");

document.write("<br />");
document.write("<br />");
document.write("<br />");



let number2 = 0;

for(let z = 0; z < 10; z++){
          number2++;
          document.write(' Brojot e ' + number2 + "<br />");
}


document.write("<br />");
let number3 = 24;

for(let y = 23; y >= 4; y--){
          number3--;
          document.write(' Brojot e ' + number3 + "<br />");
}

document.write("<br />");
for(let even1 = 1; even1 <= 100; even1++){
         if (even1 % 2 == 0){
                   document.write(even1 + "<br />");
         }
}

document.write("<br />");
let number4 = 24;

for(let d = 24; d <= 62; d++){
          number4++;
                    if(number4 == 33){
                              break;
                    } //ako if se zakomentira, odi do 63
          document.write(' Brojot e ' + number4 + "<br />");
}