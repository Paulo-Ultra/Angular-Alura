import { LoginGuard } from './autenticacao/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', loadChildren: () => import('./home/home.module').then((m)=> m.HomeModule),
  canLoad: [LoginGuard],
},

  {path:'animes', loadChildren: () => import('./animes/animes.module').then((m)=> m.AnimesModule),
  canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
