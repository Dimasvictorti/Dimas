import { Component, OnInit } from '@angular/core';
import { IEstudante } from '../estudantes';
import { AlturaComponent } from '../compartilhado/altura.component';

@Component({
    selector : 'jedi-estudantes',
    templateUrl: './lista-estudantes.component.html'
})
export class ListaEstudantesComponent implements OnInit{

    tituloPagina: string = 'Lista de Estudantes';
    larguraImagem: number = 50;
    nomeEstudante: string;
    altura: number;
    margemImagem: number  = 2;
    exibirImagem: boolean = false;
    alturaMaxima: number  = 230;
    alturasEstudantes: number[];
    // filtroLista: string = 'Anakin';
    estudantesFiltrados: IEstudante[];
    _filtroLista: string;
    get filtroLista() : string {
        return this._filtroLista;
    }
    
    set filtroLista(valor: string) {
        this._filtroLista = valor;
        this.estudantesFiltrados = this.filtroLista ? this.executarFiltro(this.filtroLista) : this.estudantes;
    }
    
    estudantes: IEstudante[] = [
        {
            "id": 1,
            "nomeEstudante": "Luke Skywalker",
            "altura": 172,
            "peso": "77",
            "corCabelo": "louro",
            "corOlhos": "blue",
            "anoNascimento": "19BBY",
            "sexo": "masculino",
            "planeta": "Alderaan",
            "url": "./assets/imagens/luke_skywalker.jpg"
        },
        {
            "id": 2,
            "nomeEstudante": "C-3PO",
            "altura": 167,
            "peso": "75",
            "corCabelo": "n/a",
            "corOlhos": "amarelo",
            "anoNascimento": "112BBY",
            "sexo": "n/a",
            "planeta": "Alderaan",
            "url": "./assets/imagens/c-3po.jpg"
        },
        {
            "id": 3,
            "nomeEstudante": "R2-D2",
            "altura": 96,
            "peso": "32",
            "corCabelo": "n/a",
            "corOlhos": "vermelho",
            "anoNascimento": "33BBY",
            "sexo": "n/a",
            "planeta": "Coruscant",
            "url": "./assets/imagens/r2-d2.jpg"
        },
        {
            "id": 4,
            "nomeEstudante": "Darth Vader",
            "altura": 202,
            "peso": "136",
            "corCabelo": "nenhuma",
            "corOlhos": "amarelo",
            "anoNascimento": "41.9BBY",
            "sexo": "masculino",
            "planeta": "Alderaan",
            "url": "./assets/imagens/darth_vader.jpg"
        },
        {
            "id": 5,
            "nomeEstudante": "Leia Organa",
            "altura": 150,
            "peso": "49",
            "corCabelo": "castanho",
            "corOlhos": "castanho",
            "anoNascimento": "19BBY",
            "sexo": "feminino",
            "planeta": "Yavin IV",
            "url": "./assets/imagens/leia_organa.jpg"
        },
        {
            "id": 6,
            "nomeEstudante": "Owen Lars",
            "altura": 178,
            "peso": "120",
            "corCabelo": "castanho, cinza",
            "corOlhos": "azul",
            "anoNascimento": "52BBY",
            "sexo": "masculino",
            "planeta": "Alderaan",
            "url": "./assets/imagens/owen_lars.jpg"
        },
        {
            "id": 7,
            "nomeEstudante": "Beru Whitesun Lars",
            "altura": 165,
            "peso": "75",
            "corCabelo": "castanho",
            "corOlhos": "azul",
            "anoNascimento": "47BBY",
            "sexo": "feminino",
            "planeta": "Alderaan",
            "url": "./assets/imagens/beru_whitesun_lars.jpg"
        },
        {
            "id": 8,
            "nomeEstudante": "R5-D4",
            "altura": 97,
            "peso": "32",
            "corCabelo": "n/a",
            "corOlhos": "vermelho",
            "anoNascimento": "desconhecido",
            "sexo": "n/a",
            "planeta": "Alderaan",
            "url": "./assets/imagens/r5-d4.jpg"
        },
        {
            "id": 9,
            "nomeEstudante": "Biggs Darklighter",
            "altura": 183,
            "peso": "84",
            "corCabelo": "preto",
            "corOlhos": "castanho",
            "anoNascimento": "24BBY",
            "sexo": "masculino",
            "planeta": "Alderaan",
            "url": "./assets/imagens/biggs_darklighter.jpg"
        },
        {
            "id": 10,
            "nomeEstudante": "Obi-Wan Kenobi",
            "altura": 182,
            "peso": "77",
            "corCabelo": "branco",
            "corOlhos": "azul-cinza",
            "anoNascimento": "57BBY",
            "sexo": "masculino",
            "planeta": "Stewjon",
            "url": "./assets/imagens/obi-wan_kenobi.jpg"
        },
        {
            "id": 11,
            "nomeEstudante": "Anakin Skywalker",
            "altura": 188,
            "peso": "84",
            "corCabelo": "louro",
            "corOlhos": "azul",
            "anoNascimento": "41.9BBY",
            "sexo": "masculino",
            "planeta": "Alderaan",
            "url": "./assets/imagens/anakin_skywalker.jpg"
        },
        {
            "id": 12,
            "nomeEstudante": "Wilhuff Tarkin",
            "altura": 180,
            "peso": "desconhecido",
            "corCabelo": "cinza",
            "corOlhos": "azul",
            "anoNascimento": "64BBY",
            "sexo": "masculino",
            "planeta": "Eriadu",
            "url": "./assets/imagens/wilhuff_tarkin.jpg"
        },
        {
            "id": 13,
            "nomeEstudante": "Chewbacca",
            "altura": 228,
            "peso": "112",
            "corCabelo": "castanho",
            "corOlhos": "azul",
            "anoNascimento": "200BBY",
            "sexo": "masculino",
            "planeta": "Kashyyyk",
            "url": "./assets/imagens/chewbacca.jpg"
        },
        {
            "id": 14,
            "nomeEstudante": "Han Solo",
            "altura": 180,
            "peso": "80",
            "corCabelo": "castanho",
            "corOlhos": "castanho",
            "anoNascimento": "29BBY",
            "sexo": "masculino",
            "planeta": "Corellia",
            "url": "./assets/imagens/han_solo.jpg"
        },
        {
            "id": 15,
            "nomeEstudante": "Greedo",
            "altura": 173,
            "peso": "74",
            "corCabelo": "n/a",
            "corOlhos": "preto",
            "anoNascimento": "44BBY",
            "sexo": "masculino",
            "planeta": "Rodia",
            "url": "./assets/imagens/greedo.jpg"
        },
        {
            "id": 16,
            "nomeEstudante": "Jabba Desilijic Tiure",
            "altura": 175,
            "peso": "1,358",
            "corCabelo": "n/a",
            "corOlhos": "laranja",
            "anoNascimento": "600BBY",
            "sexo": "hemafrodita",
            "planeta": "Nal Hutta",
            "url": "./assets/imagens/jabba_desilijic_tiure.jpg"
        },
        {
            "id": 17,
            "nomeEstudante": "Wedge Antilles",
            "altura": 170,
            "peso": "77",
            "corCabelo": "castanho",
            "corOlhos": "hazel",
            "anoNascimento": "21BBY",
            "sexo": "masculino",
            "planeta": "Corellia",
            "url": "./assets/imagens/wedge_antilles.jpg"
        },
        {
            "id": 18,
            "nomeEstudante": "Yoda",
            "altura": 66,
            "peso": "17",
            "corCabelo": "branco",
            "corOlhos": "castanho",
            "anoNascimento": "896BBY",
            "sexo": "masculino",
            "planeta": "desconhecido",
            "url": "./assets/imagens/yoda.jpg"
        },
        {
            "id": 19,
            "nomeEstudante": "Palpatine",
            "altura": 170,
            "peso": "75",
            "corCabelo": "cinza",
            "corOlhos": "amarelo",
            "anoNascimento": "82BBY",
            "sexo": "masculino",
            "planeta": "Naboo",
            "url": "./assets/imagens/palpatine.jpg"
        }
    ]
    
    constructor() {
        this.estudantesFiltrados = this.estudantes;
        this.filtroLista = '';
        this.alturasEstudantes = this.estudantes.alturasEstudantes;
    }
    
    ngOnInit(): void {
        console.log('estudantes',this.estudantes)
        // this.alturasEstudantes = this.estudantes.altura
        
    }
    
    alternarImagem() : void {
        this.exibirImagem = !this.exibirImagem;
    }

    executarFiltro(filtrarPor: string): IEstudante[] {
        // console.log('this',this)
        filtrarPor = filtrarPor.toLocaleLowerCase();
        // console.log('funcao',this.estudantes)
        return this.estudantes.filter( (estudante: IEstudante) =>
            estudante.nomeEstudante.toLocaleLowerCase().indexOf(filtrarPor) !== -1
        );
    }
}
