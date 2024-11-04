import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Class/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: Usuario): Observable<Object> {
    return this.http.post(this.apiURL, usuario); // Cambiado `this.httpClient` a `this.http`
  }
}
