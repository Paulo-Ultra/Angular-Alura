import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  //O cifrão no fim pra indicar por convesão que é um Observable
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

}
