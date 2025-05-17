//Criando classe Livro

class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo,autor,editora,anoDePublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

//Criando objetos da classe livro
let livros = []
livros.push(new Livro("livro1","marcos", "editora A", 2001))
livros.push(new Livro("livro2","marcos", "editora F", 1997))
livros.push(new Livro("livro3","Carlos", "editora F", 2010))
livros.push(new Livro("livro4","João", "editora A", 2005))
livros.push(new Livro("livro5","Fábio", "editora C", 2020))

//CRIANDO CLASSE BIBLIOTECA

class Biblioteca {
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, telefone, endereco, acervo = []){
        this.Nome = nome
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivroPeloTitulo(titulo) { 
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo){
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if(livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo){
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }
}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2", livros)

biblioteca.BuscarLivroPeloTitulo("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")


