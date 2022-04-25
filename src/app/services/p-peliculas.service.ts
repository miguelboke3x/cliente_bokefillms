
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasComponent } from '../component/peliculas/peliculas.component';
import { Peliculas } from '../models/peliculas.model';



@Injectable({
  providedIn: 'root'
})
export class PPeliculasService {
  Peliculas: Observable<any[]>=new Observable(); 
  constructor(private clienteHttp:HttpClient) { 

  } 
  getPeliculas(): Observable<any[]> { 
    console.log("Obteniendo productos del WS"); 
    this.Peliculas = this.clienteHttp.get<any[]>("http://localhost:80/peliculas") 
    return this.Peliculas; 
  }

}

