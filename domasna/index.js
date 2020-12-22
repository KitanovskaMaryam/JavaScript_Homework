const carName = 'Volvo';

let x = 75;

let y = 23;
x = 5;

let zbir = x + y;
document.write('Zbirot od x i y iznesuva ' + zbir);

x = 43;
y = 72;

let z = x + y;
alert('Zbirot (z = x + y) iznesuva ' + z);

let ostatok = 15 % 9;
alert('Ostatokot pri delenje na 15 so 9 iznesuva ' + ostatok);

x = 10;
y = 5;

x += y; // x = 15
console.log('x = x + y iznesuva ' + x);

x = 10;
x *= y; // x = 50
console.log('x = x * y iznesuva ' + x);

let godini = prompt('Vnesete kolku godini imate. ');
if (godini > 18){
    alert('Polnoleten/na si.');
} else{
    alert('Ne si polnoleten/na.');
};

x = prompt('Vnesete broj');
if(x % 2 == 0){
    document.write("<br />");
    document.write(' ___Brojot kojsto go vnesovte e paren broj.');
} else{
    document.write("<br />");
    document.write(' ___Brojot kojsto go vnesovte e neparen broj.');
};

let mesec = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12];
mesec = prompt('Vnesi go redniot broj na mesecot');
if(mesec == 1){
    document.write("<br />");
    document.write('Mesec Januari');
} else if(mesec == 2){
    document.write("<br />");
    document.write('Mesec Februari');
} else if(mesec == 3){
    document.write("<br />");
    document.write('Mesec Mart');
} else if(mesec == 4){
    document.write("<br />");
    document.write('Mesec April');
} else if(mesec == 5){
    document.write("<br />");
    document.write('Mesec Maj');
} else if(mesec == 6){
    document.write("<br />");
    document.write('Mesec Juni');
} else if(mesec == 7){
    document.write("<br />");
    document.write('Mesec Juli');    
} else if(mesec == 8){
    document.write("<br />");
    document.write('Mesec Avgust');
} else if(mesec == 9){
    document.write("<br />");
    document.write('Mesec Septemvri');
} else if(mesec == 10){
    document.write("<br />");
    document.write('Mesec Oktomvri');
} else if(mesec == 11){
    document.write("<br />");
    document.write('Mesec Noemvri');
} else if(mesec == 12){
    document.write("<br />");
    document.write('Mesec Dekemvri');
} else{
    document.write("<br />");
    document.write('Ne postoi mesec so takov reden broj.');
};


document.write("<br />");


let meseci = prompt('Vnesi rednen broj na mesec. ');

switch(meseci){
    case '1':
        meseci = "Januari";
        break;
    case '2':
        meseci = "Fevruari";
        break;
    case '3':
        meseci = "Mart";
        break;
    case '4':
        meseci = "April";
        break;
    case '5':
        meseci = "Maj";
        break;
    case '6':
        meseci = "Juni";
        break;
    case '7':
        meseci = "Juli";
        break;
    case '8':
        meseci = "Avgust";
        break;
    case '9':
        meseci = "Septemvri";
        break;
    case '10':
        meseci = "Oktomvri";
        break;
    case '11':
        meseci = "Noemvri";
        break;
    case '12':
        meseci = "Dekemvri";
    default:
        meseci = 'Ne postoi mesec so takov reden broj.';
        break;
}


document.write('Mesecot e ' + meseci);