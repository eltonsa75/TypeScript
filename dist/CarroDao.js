"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    CarroDao.prototype.remove = function (id) {
        console.log('lógica de delete');
        return new Concessionaria_1.default('', []);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Concessionaria_1.default('', []);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Concessionaria_1.default('', [])];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
