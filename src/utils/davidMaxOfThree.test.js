import { describe, expect, it } from "vitest";
import {davidMaxOfThree} from './davidMaxOfThree'

describe('Pruebas unitarias de davidMaxOfThree', () => {
    
    // Caso 1: Todos los números son diferentes
    it('Debería devolver el mayor cuando todos los números son diferentes', () => {
        expect(davidMaxOfThree(1, 5, 3)).toBe(5);
        
    });

    // Caso 2: Los tres números son iguales
    it('Debería devolver el número cuando los tres son iguales', () => {
        expect(davidMaxOfThree(4, 4, 4)).toBe(4);
    });

    // Caso 3: Dos números iguales y mayores que el tercero
    it('Debería devolver el número mayor cuando dos números son iguales y mayores que el tercero', () => {
        expect(davidMaxOfThree(8, 8, 5)).toBe(8);
        
    });

    // Caso 4: Dos números iguales y menores que el tercero
    it('Debería devolver el número mayor cuando dos números son iguales y menores que el tercero', () => {
        expect(davidMaxOfThree(5, 5, 9)).toBe(9);  
    });

    // Caso 5: Números negativos
    it('Debería devolver el mayor valor con números negativos', () => {
        expect(davidMaxOfThree(-1, -5, -3)).toBe(-1);
    });

    // Caso 6: Mixtura de positivos y negativos
    it('Debería devolver el mayor valor cuando hay números positivos y negativos', () => {
        expect(davidMaxOfThree(-1, 2, 0)).toBe(2);
    });

});