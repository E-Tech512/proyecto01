import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../Services/categoria.service';
import { CommonModule } from '@angular/common';
import { categoria } from '../../../Class/categoria';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'], // corregido a styleUrls
})
export class CategoriaComponent implements OnInit {
  categorias: categoria[] = [];

  constructor(private categoriaServicio: CategoriaService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  private obtenerCategorias() {
    this.categoriaServicio.getCategorias().subscribe((dato) => {
      this.categorias = dato;
    });
  }
}
