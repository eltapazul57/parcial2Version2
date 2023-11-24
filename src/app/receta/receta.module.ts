import { RecetaListComponent } from './receta-list/receta-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [RecetaListComponent],
  declarations: [RecetaListComponent]
})
export class RecetaModule { }
