function calculator(a, b, operationType){

switch(operationType)
{
    case 'soberi':
        result = a + b;
        return result;
    case 'odzemi':
        result = a - b;
        return result;
    case 'pomnozi':
        result = a * b;
        return result;
    case 'podeli':
        result = a / b;
        return result;
    default:
        result = 'Wrong instructions';
        return result;
}

}

console.log('Zbirot iznesuva ', calculator(5, 7, 'soberi'));
console.log('Razlikata iznesuva ', calculator(5, 7, 'odzemi'));
console.log('Proizvodot iznesuva ', calculator(5, 7, 'pomnozi'));
console.log('Kolicnikot iznesuva ', calculator(5, 7, 'podeli'));
console.log('Zbirot iznesuva ', calculator(5, 7, 'poddddddeli'));