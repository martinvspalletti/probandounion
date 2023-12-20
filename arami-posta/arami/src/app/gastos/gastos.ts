export class Gastos {
  /*constructor(init?: Partial<Gastos>) {
    Object.assign(this, init);
  }*/
  constructor(
    public id: number,
    public detalle: string,
    public importe: number
  ) {}
}
