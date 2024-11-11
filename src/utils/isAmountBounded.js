export function isAmountBounded(vnumero) {
 
    const numero = vnumero;
   
    if ((numero<1) || (numero > 1000)) {
      return false
    } else {
        return true  
    }
  }