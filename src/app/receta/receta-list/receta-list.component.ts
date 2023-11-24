import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';



@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {
  recetas: Array<Receta>=[];
  totalOpiniones:number = 0;
  constructor(private recetaService:RecetaService) { }

  getRecetas():void{
    this.recetaService.getRecetas().subscribe(recetas => this.recetas = recetas);
  }
  ngOnInit() {
    this.getRecetas();
  }
  getOpiniones(): number {
    let contador: number= 0;

    this.recetas.forEach((receta) => contador = contador + receta.cantidadOpiniones);

    const totalOpiniones = contador;

    return totalOpiniones;
  }
  getCalificacion(): number {
    let contador: number= 0;
    let total:number = 0;
    this.recetas.forEach((receta) => contador = contador + receta.estrellas);
    this.recetas.forEach((receta) => total = total + 1);
    const totalCalificacion = contador/total;

    return totalCalificacion;
  }

}
