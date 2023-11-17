import { Injectable } from '@angular/core';
import Livro from './livro';

@Injectable({
  providedIn: 'root'
})


export class ControleLivrosService {
  livros: Array<Livro> = [
    new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java', ['Bert Bates', 'Kathy Sierra']),
      new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel']),
      new Livro(3, 3, 'Core Java for the Impatient', 'Resumo do Livro 3', ['Cay Horstmann']),
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }  
};