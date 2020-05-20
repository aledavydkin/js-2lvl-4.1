export default function validateNumber(number) {
  const convertNum = parseInt(number, 10);

  if (convertNum === false) {
    throw new Error('Допускается ввод только чисел в десятичной системе счисления');
  }
  return convertNum;
}
