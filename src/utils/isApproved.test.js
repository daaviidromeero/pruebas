import { describe, expect, it } from "vitest";
import {isApproved} from './isApproved'

describe('Función isApproved', () => {

it('Valores menores que 0 deben devolver null', () => {
    expect(isApproved(-1)).toBe(null);
   
});

it('Valores entre 0 y 4 deben devolver false', () => {
    expect(isApproved(4)).toBe(false);
});

it('Valores entre 5 y 10 deben devolver true', () => {
    expect(isApproved(5)).toBe(true);
});

it('Valores mayores que 10 deben devolver null', () => {
    expect(isApproved(11)).toBe(null);
   
});

 // **Prueba adicional de caja blanca**: Nota en el límite superior del rango (10)
 it('Debe devolver true cuando la nota es 10 (aprobado en el límite superior)', () => {
    expect(isApproved(10)).toBe(true);
});

// **Prueba adicional de caja blanca**: Nota en el límite inferior de aprobación (5)
it('Debe devolver true cuando la nota es 5 (aprobado en el límite inferior)', () => {
    expect(isApproved(5)).toBe(true);
});

});
