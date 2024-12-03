import { describe, expect, it } from "vitest";
import { div } from './div.js'

describe('funcion div', () => {
    
   // a) La función div es una función.
   it('La función div debe ser una función', () => {
    expect(typeof div).toBe('function');
  });

  // b) División de dos números positivos enteros debe dar un número positivo.
  it('División de dos números positivos debe dar un número positivo', () => {
     expect(div(6, 2)).toBe(3);            // Verifica el valor exacto
  });

  // c) División de dos números negativos enteros debe dar un número positivo.
  it('División de dos números negativos debe dar un número positivo', () => {
    expect(div(-6, -2)).toBe(3);            // Verifica el valor exacto
  });

  // d) División de un número positivo y otro negativo debe dar un número negativo.
  it('División de un número positivo y un número negativo debe dar un número negativo', () => {
    expect(div(6, -2)).toBe(-3);           // Verifica el valor exacto
  });

});