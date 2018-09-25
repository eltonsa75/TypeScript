// import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'
//import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa'
//import { CarroDao } from './CarroDao';
import Carro from './Carro'
//import { MotoDao } from './MotoDao';
import Moto from './Moto';
import { Dao } from './Dao';

/* --Concessionaria-- */
//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', []);
/* --Pessoa-- */
//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '');
/* --Carro--*/
//let dao3: CarroDao = new CarroDao()
let carro: Carro = new Carro('', []);
/* --Moto--*/
//let dao4: MotoDao = new MotoDao()
let moto: Moto = new Moto('', []);

let dao5: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao6: Dao<Pessoa> = new Dao<Pessoa>();

dao5.inserir(concessionaria);
dao6.remove(5);
