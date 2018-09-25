import { DaoInterfaces } from './DaoInterfaces'
import Carro from './Concessionaria'

export class CarroDao implements DaoInterfaces {

    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean {
        console.log('lógica de insert');
        return true
    }
    atualizar(object: Carro):boolean {
        console.log('lógica de update')
        return true
    }
    remove(id: number): Carro {
       console.log('lógica de delete')
       return new Carro('', []) 
    }
    selecionar(id: number):Carro {
        console.log('lógica select')
        return new Carro('', []);
    }
    selecionarTodos(): [any] {
        console.log('lógica getAll')
        return [new Carro('', [])] 
    }

}