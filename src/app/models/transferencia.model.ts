export interface Transferencia {
  id?: string;
  valor: number;
  destino: number | string;
  descricao?: string;
  data?: string;
}
