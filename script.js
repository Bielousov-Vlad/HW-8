let numOrStr = prompt('Введіть число або рядок:');
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log('Ви скасували');
    break;
  case numOrStr.trim() === '':
    console.log('Порожній рядок');
    break;
  case isNaN(+numOrStr):
    console.log('Введено нечислове значення');
    break;
  default:
    console.log('OK!');
    break;
}