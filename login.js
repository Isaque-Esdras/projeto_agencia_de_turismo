entrar = () =>{

    let login = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (login == "maldonado@gmail.com" && senha == 33921668) {
        window.location.href = "destinos.html"
    }else{
        alert('Login ou Senha incorreto.')
    }
}