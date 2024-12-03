import { describe, expect, it } from "vitest";
import { david } from './david.js'

describe('Pruebas función david', () => {

    // a) La función david es una función.
    it('La función david debe ser una función', () => {
      expect(typeof david).toBe('function');
    });
  
    // b) Si la función recibe un número positivo devuelve true.
    it('Debe devolver true si recibe un número positivo', () => {
      expect(david(3)).toBe(true);
    });
  
    // c) Si la función recibe un número negativo devuelve false.
    it('Debe devolver false si recibe un número negativo', () => {
      expect(david(-3)).toBe(false);
    });
  
    // d) Si la función recibe un 0 devuelve null.
    it('Debe devolver null si recibe un 0', () => {
      expect(david(0)).toBe(null);
    });
    
  });