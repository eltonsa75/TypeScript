"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('lógica de update');
        return true;
    };
    Dao.prototype.remove = function (id) {
        console.log('lógica de delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('lógica select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('lógica getAll');
        return Object();
    };
    return Dao;
}());
exports.Dao = Dao;
