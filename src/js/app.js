export default function validateNumber(number) {
  try {
    const convertNum = parseInt(number, 10);
    if (Number.isNaN(convertNum)) {
      throw new Error('Допускается ввод только чисел в десятичной системе счисления');
    }
    if (convertNum !== number) {
      throw new Error('Допускается ввод только чисел в десятичной системе счисления, цифры от 0 до 9');
    }
    return convertNum;
  } catch (e) {
    return e;
  }
}

console.log(validateNumber(23));
