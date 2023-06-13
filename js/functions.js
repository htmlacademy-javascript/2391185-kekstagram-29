function checkStringLength (inStr, inStrLength){
  return (inStr.length <= inStrLength);
};

function isPalindrome(inStr) {
  /*Приводим к нижнему регистру, убираем все что не буквы/цифры на всей длине строки*/
  const str = inStr.toLowerCase().replace(/[^а-яa-z0-9]/gi, '');
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}

function isPalindrome2(inStr) {
  /*Приводим к нижнему регистру, убираем все что не буквы/цифры на всей длине строки*/
  const str = inStr.toLowerCase().replace(/[^а-яa-z0-9]/gi, '');
  /* Массив -> разворот -> строка*/
  return str === str.split('').reverse().join('');
}

function extractNumbers(inStr) {
  let str = inStr;
  /*Проверим что не цифра*/
  if (!Number.isNaN(str)){
    str = str.toString();
  }
  /*убираем все что не цифра на всей длине строки*/
  str = str.replace(/[\D]/gi, '');
  return parseInt(str,10);
}

checkStringLength('Тестовая строка', 14);
isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome2('Лёша на полке клопа нашёл ');
extractNumbers('2023 год');            // 2023
extractNumbers('ECMAScript 2022');     // 2022
extractNumbers('1 кефир, 0.5 батона'); // 105
extractNumbers('агент 007');           // 7
extractNumbers('а я томат');           // NaN;
extractNumbers('-1');                  // 1
