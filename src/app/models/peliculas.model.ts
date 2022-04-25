import { ThisReceiver } from "@angular/compiler";



export class Peliculas{
    identificador:number=0;
    titulo:string="";
    sinopsis:string="";
    anyoestreno:number=0;
    imagen:string="";
    video:string="";
    constructor (identificador: number, titulo: string, sinopsis: string, anyoestreno: number, imagen: string, video: string){
        this.identificador=identificador;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.anyoestreno=anyoestreno;
        this.imagen=imagen;
        this.video=video;
        
    }
}