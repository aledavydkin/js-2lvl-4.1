import {
  describe, expect,
} from '@jest/globals';
import validateNumber from '../app';

describe('Проверка на ввод не является числом в десятичной системе счисления', () => {
  test('Если пришло число', () => {
    const result = validateNumber(1);
    expect(result).toEqual(1);
  });

  test('Если пришло не число', () => {
    expect(() => { validateNumber('Не число'); }).toThrowError(new Error('Допускается ввод только чисел в десятичной системе счисления'));
  });

  test('Если пришло число не в дясятичной системе счисления ', () => {
    expect(() => { validateNumber('-0XF'); }).toThrowError(new Error('Допускается ввод только чисел в десятичной системе счисления, цифры от 0 до 9'));
  });
});
