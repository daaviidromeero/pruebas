import { describe, expect, it } from "vitest";
import {isAmountBounded} from './isAmountBounded'

describe('Función isAmountBounded', () => {

// Partición 1: Valores dentro del rango [1, 1000]
it('debe devolver true para valores dentro del rango [1, 1000]', () => {
    expect(isAmountBounded(1)).toBe(true);
    expect(isAmountBounded(500)).toBe(true);
    expect(isAmountBounded(1000)).toBe(true);
});

});