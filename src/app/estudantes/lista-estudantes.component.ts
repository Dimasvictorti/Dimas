import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jedi-estudantes',
  templateUrl: './lista-estudantes.component.html',
})
export class EstudantesComponent implements OnInit {

  // PROPRIEDADES
  titulo: string = "Lista de Estudantes";  
  larguraImagem: number = 50;
  margemImagem: number = 2;
  exibirImagem: boolean = false;
  filtroLista: string = '';
  estudantes: any[] = [
    {
      "foto": 'assets/Anakin.png',
      "nome": "Anakin Skywalker",
      "sexo": "Masculino",
      "planeta": "Tatooine"
    },

    {
      "foto": 'assets/leia.jpg',
      "nome": "Leia",
      "sexo": "Feminino",
      "planeta": "Coruscant"
    },
  ]


  // CONSTRUTOR
  constructor() { }

  // O QUE SERÁ CARREGADO QUANDO A TELA FOR EXIBIDA
  ngOnInit() {    
  }

  // FUNÇÕES 

  //-- FUNÇÃO DE ALTERNAÇÃO DA IMAGEMS
  alternarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

}
