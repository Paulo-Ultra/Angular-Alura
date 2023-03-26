import { SharedModule } from './../shared/shared.module';
import { AnimeComponent } from './anime/anime.component';
import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesRoutingModule } from './animes-routing.module';
import { ListaOnepieceComponent } from './lista-onepiece/lista-onepiece.component';
import { GradeFotosOnepieceComponent } from './grade-fotos-onepiece/grade-fotos-onepiece.component';
import { DetalheAnimeComponent } from './detalhe-anime/detalhe-anime.component';
import { ComentariosComponent } from './detalhe-anime/comentarios/comentarios.component';
import { NovoAnimeComponent } from './novo-anime/novo-anime.component';


@NgModule({
  declarations: [
    ListaOnepieceComponent,
    AnimeComponent,
    GradeFotosOnepieceComponent,
    DetalheAnimeComponent,
    ComentariosComponent,
    NovoAnimeComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class AnimesModule { }
