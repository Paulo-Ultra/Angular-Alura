import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { AnimesService } from './../animes.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { Animes } from '../animes';

@Injectable({
  providedIn: 'root'
})
export class ListaOnepieceResolver implements Resolve<Animes> {
  constructor(private animesService: AnimesService, private usuarioService: UsuarioService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animes> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animesService.listaDoUsuario(userName);
      }),
      take(1)
    );
  }
}
/* Esse serviço (RESOLVER) faz algum carregamento antes da rota ser resolvida*/
