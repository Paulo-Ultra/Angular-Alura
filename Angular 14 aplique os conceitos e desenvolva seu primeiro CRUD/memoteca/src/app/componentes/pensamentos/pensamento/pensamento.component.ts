import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Faz o componente receber comunicação do componente pai(listar-pensamento)
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Paulo',
    modelo: 'modelo3'
  };

  constructor() { }

  larguraPensamento() : string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  ngOnInit(): void {
  }

}
