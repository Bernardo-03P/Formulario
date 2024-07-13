function Enviar(){
    let Nomeuser = document.getElementById(`Nome`).value
    let Emailuser = document.getElementById(`Email`).value
    let Senhauser =  document.getElementById(`Senha`).value

    let carros = document.querySelector("input[name='carro']:checked").value
    let motos = document.querySelector("input[name='moto']:checked").value

    let jesko = document.getElementById("Jesko")
    let laferrari = document.getElementById("Laferrari")
    let camaro = document.getElementById("SS 69")
    let dodge = document.getElementById("Demon")
    let sportster = document.getElementById("Sportster S")
    let fatbob = document.getElementById("Fat Bob")
    let cbr1000 = document.getElementById("CBR 1000")
    let zxr = document.getElementById("ZX-10R")

if(jesko.checked || laferrari.checked || camaro.checked || dodge.checked || sportster.checked || fatbob.checked || cbr1000.checked || zxr.checked){ 
    

        
        alert(`Seu nome é: ${Nomeuser}\n
            Seu email é: ${Emailuser}\n
            Sua senha é: ${Senhauser}\n
            Seu modelo de carro escolhido é: ${carros}\n
            Seu modelo de moto escolhido é: ${motos}`)

        
            window.location.href=`tela2.html`
}else{

    alert(`Escolha alguma das opções!`)
}

}