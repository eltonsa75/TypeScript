"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* -- Criar carro -- */
var carroA = new Carro_1.default('Renegade', 4);
var carroB = new Carro_1.default('Onix', 2);
var carroC = new Carro_1.default('Palio', 2);
/* --- montar a lista de carros da concessionaria -- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
/* -- exibir a lista de carros -- */
//console.log(concessionaria.mostrarListaDeCarros())
/* -- comprar o carro -- */
var cliente = new Pessoa_1.default('Elton', 'Renegade');
/* -- Função Map que é um lopp que utilizada para correr cada posição do array --*/
concessionaria.mostrarListaDeCarros().map(function (Carro) {
    if (Carro['modelo'] == cliente.dizerCarroPreferido())
        //comprar o carro
        cliente.comprarCarro(Carro);
});
console.log(cliente.dizerCarroQuetem());
