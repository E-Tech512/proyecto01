import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoria } from '../Class/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiURL = 'http://localhost:8080/categorias'

  constructor(private http:HttpClient) { }

  getCategorias():Observable<categoria[]>{
    return this.http.get<categoria[]>(this.apiURL)
  }

  registrarCategoria(categoria:categoria): Observable<Object> {
    return this.http.post(this.apiURL, categoria); 
  }
}
