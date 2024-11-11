import { describe, expect, it } from "vitest";
import {validateText} from './validateText'

describe('Función validateText', () => {

it('Texto válido alfabético de longitud 6 a 10', () => {
    expect(validateText('abcdeF')).toBe(true);  // Longitud 6
    expect(validateText('abcdefghij')).toBe(true);  // Longitud 10
});

it('Texto con longitud menor a 6', () => {
    expect(validateText('abc')).toBe(false);
});

it('Texto con longitud mayor a 10', () => {
    expect(validateText('abcdefghijkl')).toBe(false);
});

it('Texto con caracteres no alfabéticos', () => {
    expect(validateText('abc123')).toBe(false);
});

it('Texto vacío', () => {
    expect(validateText('')).toBe(false);
});

});