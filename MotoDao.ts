import { DaoInterfaces } from './DaoInterfaces'
import Moto from './Moto'

export class MotoDao implements DaoInterfaces {

    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('lógica de insert');
        return true
    }
    atualizar(object: Moto):boolean {
        console.log('lógica de update')
        return true
    }
    remove(id: number): Moto {
       console.log('lógica de delete')
       return new Moto('', '') 
    }
    selecionar(id: number):Moto {
        console.log('lógica select')
        return new Moto('', '');
    }
    selecionarTodos(): [any] {
        console.log('lógica getAll')
        return [new Moto('', '')] 
    }

}