class Produto {


constructor(){

    this.id = 0
    this.array = []
}

gerar = () =>{

    let produto = this.lerClique()
    console.log(produto)
    
    let selector = document.getElementById('seletor')

    let criar = document.createElement('option')
    criar.text = JSON.stringify(produto)
    selector.appendChild(criar)

    



    if (this.seVazio(produto)==true) {
        this.adicionar()
    }

    

}

lerClique = () =>{

    let produto = {}

    produto.id = this.id
    produto.destino = document.getElementById('destino').value
    produto.pessoas = document.getElementById('pessoasQuantidade').value
    produto.ida = document.getElementById('ida').value
    produto.volta = document.getElementById('volta').value
    produto.nome = document.getElementById('nome').value
    produto.email = document.getElementById('email').value
    produto.telefone = document.getElementById('telefone').value

    return produto
}

seVazio = (produto) =>{

    let mensagem = ''

    if (produto.destino == 0) {
        mensagem+= 'Digite o Destino \n'
    }if (produto.nome == 0) {
        mensagem+= 'Digite o Nome'
    }if (mensagem != 0) {
        alert(mensagem)
        return false
    }
        return true
}

adicionar = () =>{

    this.array.push(produto)
    this.id ++
}


confirmar = () =>{

    if (confirm("Deseja mesmo confirmar esse cadastro ?")) {
        alert("Cadastro efetuado.")
    }
    
}

















}

let produto = new Produto