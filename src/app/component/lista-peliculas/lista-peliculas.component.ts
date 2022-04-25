import { Component, OnInit } from '@angular/core'
import { Peliculas } from 'src/app/models/peliculas.model';
import { PPeliculasService } from 'src/app/services/p-peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  listapeliculas: any[] = [];

  constructor(private servicio: PPeliculasService) { }

  ngOnInit(): void {
    this.servicio.getPeliculas().subscribe(
      peliculas => { 
        console.log("Obteniendo peliculas"); console.log(Peliculas); 
        this.listapeliculas = peliculas; 
      })
  }

}
