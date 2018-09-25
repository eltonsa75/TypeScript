export default class Veiculo {
    protected modelo: string
    private velocidade: number = 0

 
    private acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    private parar(): void {
        this.velocidade = 0
    }

     private velocidadeAtual(): number {
        return this.velocidade
    }
}
