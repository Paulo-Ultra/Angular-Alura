import { Component, Input, OnInit } from '@angular/core';
import { Animes } from '../animes';

@Component({
  selector: 'app-grade-fotos-onepiece',
  templateUrl: './grade-fotos-onepiece.component.html',
  styleUrls: ['./grade-fotos-onepiece.component.css']
})
export class GradeFotosOnepieceComponent implements OnInit {

  @Input() animes!: Animes;

  constructor() { }

  ngOnInit(): void {
  }

}
