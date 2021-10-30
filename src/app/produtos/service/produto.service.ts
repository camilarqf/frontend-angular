import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getProduto(codigo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}produto/${codigo}`);
  }

  createProduto(produto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}produto/cadastrar`, produto);
  }

  updateProduto(codigo: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}produto/editar/${codigo}`, value);
  }

  deleteProduto(codigo: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}produto/${codigo}`, {
      responseType: 'text',
    });
  }

  getProdutosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}produtos`);
  }
}
