import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jedi-estudantes',
  templateUrl: './lista-estudantes.component.html',
})
export class EstudantesComponent implements OnInit {

  titulo: string = "Lista de Estudantes";
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

  constructor() { }

  ngOnInit() {
  }

}
