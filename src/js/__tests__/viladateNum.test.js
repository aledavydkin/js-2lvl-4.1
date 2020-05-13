import {
  describe, expect,
} from '@jest/globals';
import validateNumber from '../app';

describe('Проверка на ввод не является числом в десятичной системе счисления', () => {
  test('Если пришло число', () => {
    const result = validateNumber(1);
    expect(result).toBe(1);
  });

  test('Если пришло не число', () => {
    const result = validateNumber('Не число');
    expect(() => result()).toThrow();
  });

  test('Если пришло число не в дясятичной системе счисления ', () => {
    const result = validateNumber('-0XF');
    expect(() => result()).toThrow();
  });
});
