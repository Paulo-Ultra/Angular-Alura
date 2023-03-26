import { NovoAnimeComponent } from './novo-anime/novo-anime.component';
import { ListaOnepieceResolver } from './lista-onepiece/lista-onepiece.resolver';
import { DetalheAnimeComponent } from './detalhe-anime/detalhe-anime.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOnepieceComponent } from './lista-onepiece/lista-onepiece.component';

const routes: Routes = [
  {
    path:'', component: ListaOnepieceComponent,
    resolve: {
    animes: ListaOnepieceResolver,
    },
 },
 {path: 'novo', component: NovoAnimeComponent,},
 {path:':animeId', component: DetalheAnimeComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
