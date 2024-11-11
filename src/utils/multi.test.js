import { describe, expect, it } from "vitest";
import {multi} from './multi'

describe('Función Multiplicar', () => {

    it('Suma debe ser una función', () => {
      expect(typeof multi).toBe('function');
    });
  
    it('multi debe multiplicar correctamente dos números positivos', () => {
      expect(multi(3,5)).toBe(15);
    });

    it('multi debe multiplicar correctamente dos números negativos', () => {
        expect(multi(-3, -5)).toBe(15);
    });

    it('multi debe multiplicar correctamente un número negativo y otro positivo', () => {
        expect(multi(-3, 5)).toBe(-15);
    });
  });