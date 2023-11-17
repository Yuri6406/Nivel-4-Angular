import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livros-dados',
  templateUrl: './livros-dados.component.html',
  styleUrls: ['./livros-dados.component.css']
})

export class LivrosDadosComponent {
  public livro: Livro = new Livro();
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    this.livro.autores = this.livro.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }

}
