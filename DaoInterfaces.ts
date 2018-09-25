export interface DaoInterfaces <T>{
    nomeTabela: string

    inserir(object: T): boolean
    atualizar(object: T):boolean
    remove(id: number): T
    selecionar(id: number): T
    selecionarTodos(): [T]

}