import Veiculo from './Veiculo'

 class Moto extends Veiculo {
    private acelerar(): void {
        this.velocidade = this.velocidade + 20
    }

}

export default Moto