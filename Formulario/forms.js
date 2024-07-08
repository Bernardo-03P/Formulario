function Enviar(){
    let Nomeuser = document.getElementById(`Nome`).value
    let Emailuser = document.getElementById(`Email`).value
    let Senhauser =  document.getElementById(`Senha`).value

    let carros = document.querySelector("input[name='carro']:checked").value
    let motos = document.querySelector("input[name='moto']:checked").value


    alert(`Seu nome é: ${Nomeuser}\n
           Seu email é: ${Emailuser}\n
           Sua senha é: ${Senhauser}\n
           Seu modelo de carro escolhido é: ${carros}\n
           Seu modelo de moto escolhido é: ${motos}`)
}