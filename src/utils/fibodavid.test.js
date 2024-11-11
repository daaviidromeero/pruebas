import { describe, expect, it } from "vitest";
import { fibonacci } from './fibodavid.js'

describe('funcion fibonacci', () => {
    it('debería retornar 0 para fibonacci(0)', () => {
        expect(fibonacci(0)).toBe(0);
      });
    
    it('debería retornar 1 para fibonacci(1)', () => {
        expect(fibonacci(1)).toBe(1);
      });
    
    it('debería retornar 1 para fibonacci(2)', () => {
        expect(fibonacci(2)).toBe(1);
      });
    
    it('debería retornar 2 para fibonacci(3)', () => {
        expect(fibonacci(3)).toBe(2);
      });
    
    it('debería retornar 3 para fibonacci(4)', () => {
        expect(fibonacci(4)).toBe(3);
      });   
});
