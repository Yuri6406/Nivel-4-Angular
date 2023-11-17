import { Component, OnInit } from '@angular/core';


import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

import {Editora} from '../editora';
import Livro from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})

export class LivroListaComponent implements OnInit {

  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  public autoresForm: string = '';

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }


  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigoLivro: number): void => {
    this.servLivros.excluir(codigoLivro);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
