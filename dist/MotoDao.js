"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    MotoDao.prototype.remove = function (id) {
        console.log('lógica de delete');
        return new Moto_1.default('', '');
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return new Moto_1.default('', '');
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return [new Moto_1.default('', '')];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
