import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from  './Concessionaria'
import Moto from './Moto';
/* -- Criar carro -- */

let carroA = new Carro('Renegade', 4)
let carroB = new Carro('Onix', 2)
let carroC = new Carro('Palio', 2)

/* --- montar a lista de carros da concessionaria -- */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]



let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)



/* -- exibir a lista de carros -- */
//console.log(concessionaria.mostrarListaDeCarros())


/* -- comprar o carro -- */
let cliente  = new Pessoa('Elton', 'Renegade')

/* -- Função Map que é um lopp que utilizada para correr cada posição do array --*/  
concessionaria.mostrarListaDeCarros().map((Carro: Carro) => {
    
    if(Carro['modelo'] == cliente.dizerCarroPreferido())

        //comprar o carro
        cliente.comprarCarro(Carro)
})

console.log(cliente.dizerCarroQuetem())


