import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { ListaOnepieceComponent } from './lista-onepiece/lista-onepiece.component';


@NgModule({
  declarations: [
    ListaOnepieceComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule
  ]
})
export class AnimesModule { }
