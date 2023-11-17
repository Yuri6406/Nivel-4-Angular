//Criando a class Editora, com os campos codEditora, numérico e nome do tipo texto.

export class Editora {
  CodEditora: number;
  nome: string;

  constructor(codEditora: number,nome: string){
    this.CodEditora = codEditora;
    this.nome = nome;
  }
}

export default Editora;