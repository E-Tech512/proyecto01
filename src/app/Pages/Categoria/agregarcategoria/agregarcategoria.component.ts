import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { categoria } from '../../../Class/categoria';
import { CategoriaService } from '../../../Services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarcategoria',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregarcategoria.component.html',
  styleUrl: './agregarcategoria.component.css'
})
export class AgregarcategoriaComponent implements OnInit{
  categoria: categoria = new categoria();

  constructor(private categoriaService:CategoriaService,private router:Router){}
  ngOnInit(): void {  }

  guardarCategoria(){
    this.categoriaService.registrarCategoria(this.categoria).subscribe(
      dato=>{
        console.log(dato);
        this.iracategoria();
      },
      error => console.log(error)
    )
  }

  iracategoria(){
    this.router.navigate(['contenido/categoria'])
  }

  onSubmit(){
    this.guardarCategoria();
  }

}
