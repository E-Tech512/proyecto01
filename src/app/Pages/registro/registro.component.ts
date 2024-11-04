import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../Class/usuario';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../Services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // Cambiado a styleUrls en plural
})
export class RegistroComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private usuarioServicio: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  guardarUsuario() {
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(
      dato => {
        console.log(dato);
        this.iralalistadeusuarios();
      },
      error => console.log(error)
    );
  }

  iralalistadeusuarios() {
    this.router.navigate(['/usuarios']);
  }

  onSubmit() {
    this.guardarUsuario();
  }
}
