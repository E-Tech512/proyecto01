import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriaComponent } from '../../Categoria/categoria/categoria.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,CategoriaComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
