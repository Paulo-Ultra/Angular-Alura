import { environment } from './../../environments/environments';
import { TokenService } from './../autenticacao/token.service';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime, Animes } from './animes';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animes> {
    return this.httpClient.get<Animes>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Anime> {
    return this.httpClient.get<Anime>(`${API}/photos/${id}`);
  }

  excluirAnime(id: number): Observable<Anime> {
    return this.httpClient.delete<Anime>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean>{
    return this.httpClient.post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
    .pipe(
      mapTo(true), catchError((error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      })
      );
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.httpClient.post(`${API}/photos/upload`, formData, {
      observe: 'events', reportProgress: true,
    });
  }
}

