import { AnimesService } from './../animes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../animes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-anime',
  templateUrl: './detalhe-anime.component.html',
  styleUrls: ['./detalhe-anime.component.css']
})
export class DetalheAnimeComponent implements OnInit {

  animeId!: number;
  anime$!: Observable<Anime>;

  constructor(
    private animesService: AnimesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.animeId = this.activatedRoute.snapshot.params['animeId'];
    this.anime$ = this.animesService.buscaPorId(this.animeId);
  }

  curtir() {
    this.animesService.curtir(this.animeId).subscribe((curtida) => {
        if(curtida) {
          this.anime$ = this.animesService.buscaPorId(this.animeId);
        }
    });
  }

  excluir() {
    this.animesService.excluirAnime(this.animeId).subscribe(() => {
      this.router.navigate(['/animes/']);
    }, (error) => console.log(error));
  }

}
