import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOnepieceComponent } from './lista-onepiece/lista-onepiece.component';

const routes: Routes = [
  {path:'', component: ListaOnepieceComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
