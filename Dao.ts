import { DaoInterfaces } from "./DaoInterfaces";

export class Dao<T> implements DaoInterfaces<T> {
  

    nomeTabela: string = ''

    inserir(object: T): boolean {
        console.log('lógica de insert');
        return true
    }
    atualizar(object: T):boolean {
        console.log('lógica de update')
        return true
    }
    remove(id: number): T {
       console.log('lógica de delete')
       return Object()
    }
    selecionar(id: number):T {
        console.log('lógica select')
        return Object()
    }
    selecionarTodos(): [any] {
        console.log('lógica getAll')
        return Object()
    }

}
}