import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gastos } from "../gastos/gastos";

@Injectable({
  providedIn: "root",
})
export class GastosService {
  url = "http://localhost:4444/gastos";
  constructor(private http: HttpClient) {}

  getAll(): Observable<Gastos[]> {
    return this.http.get<Gastos[]>(this.url);
  }

  registrarGasto(
    id: number,
    detalle: string,
    importe: number
  ): Observable<Gastos> {
    const gasto = new Gastos(id, detalle, importe);
    return this.http.post<Gastos>(this.url, gasto);
  }

  deleteGasto(id: number): Observable<Gastos> {
    return this.http.delete<Gastos>(`${this.url}/${id}`);
  }

  updateGasto(
    id: number,
    detalle: string,
    importe: number
  ): Observable<Gastos> {
    const gasto = new Gastos(id, detalle, importe);
    return this.http.patch<Gastos>(this.url, gasto);
  }
}
