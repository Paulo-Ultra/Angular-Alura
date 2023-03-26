import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-lista-onepiece',
  templateUrl: './lista-onepiece.component.html',
  styleUrls: ['./lista-onepiece.component.css']
})
export class ListaOnepieceComponent implements OnInit {

  animes!: Animes;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* Não é uma boa prática um subscribe dentro de outro
    this.usuarioService.retornaUsuario().subscribe((usuario)=> {
      const userName = usuario.name ?? '';
      this.animesService.listaDoUsuario(userName).subscribe(animes => {
        this.animes = animes;
      });
    }); */
   this.activatedRoute.params.subscribe((param) => {
    this.animes = this.activatedRoute.snapshot.data['animes'];
   });
  }
}
