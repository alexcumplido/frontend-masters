export interface Producto {
  description: string;
  price: number;
}

export function calcIV(productos: Producto[]): number[] {
  let total = 0;
  productos.forEach(({ price }) => (total += price));
  return [total, total * 0.15];
}
