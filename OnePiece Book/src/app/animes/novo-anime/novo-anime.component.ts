import { Router } from '@angular/router';
import { AnimesService } from './../animes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-novo-anime',
  templateUrl: './novo-anime.component.html',
  styleUrls: ['./novo-anime.component.css']
})
export class NovoAnimeComponent implements OnInit {

  formularioAnime!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private animesService: AnimesService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formularioAnime = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
      });
    }

  upload() {
    const allowComments = this.formularioAnime.get('allowComments')?.value ?? false;
    const description = this.formularioAnime.get('description')?.value ?? '';

    this.animesService.upload(description, allowComments, this.file)
      .pipe(finalize(()=> this.router.navigate(['animes'])))
      .subscribe((event: HttpEvent<any>) => {
        if(event.type === HttpEventType.UploadProgress){
          const total = event.total ?? 1;
          this.percentualConcluido = Math.round(100 * (event.loaded / total));
        }
      }, (error) => console.log(error)
    );
  }

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
