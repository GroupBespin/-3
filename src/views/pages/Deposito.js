
// import IsAuthenticated from '../../service/isAuth.js';
import baseURL from '../../service/baseURL.js'


const RequestDataAccount = async () => {

    let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
    
    let { token, usuario: { login }} = dataUser

    console.log(dataUser)
    
    let headersDefault = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }
    
    const response = await axios.get(`${baseURL}lancamentos/planos-conta?login=${login}`, headersDefault)
    const allData = response.data
    console.log(allData)
    return allData
}

let Deposito = {
    render: async () => {
        let view = `
       
  <div class="container">
  <div class="row">
    <div class="col">
      <div class="balance top--offset">
        <p>Saldo Conta: <span class="green--text" id="conta"></span></p>
        <p >Saldo Conta Credito: <span class="green--text"id="cont_credito"></span></p>
      </div>
    </div>
    <!-- <div class="col"></div> -->
    <div class="col">
      <div class="balance top--offset">
      <p>Data de inicio da Conta: <span class="green--text" id="iniconta"></span></p>
      <p >Data de fim da conta: <span class="green--text"id="fim_conta"></span></p>
      </div>
    </div>
    </div>
  </div>
</div>


<section class="container top--offset information">

  <div class="text-center information--title">
    <h1>Cliente depositante: <b id="nome_cliente"></b></h1>
  </div>



  <form>
      <div class="form-group">
        <label for="exampleInputEmail1"> Informações da conta:</label>
      </div>

      <select class="form-control " id="id_tipo_conta" title="Tipo deconta">
          <option value="" selected>Selecionar</option>
          <option value="1">Conta Banco</option>
          <option value="2">Conta Credito</option>
      </select>
      <div class="form-group">
        <label for="numero_conta"> Numero da conta/Depositante:</label>
        <input type="integer" class="form-control" id="conta_dep" placeholder="Conta depositante">
      </div>
      <div class="form-group">
      <label for="numero_conta_destino"> Numero da conta/Destino:</label>
      <input type="text" class="form-control" id="contaDestino" placeholder="Conta Destino">
      </div>
       <div class="form-group">
      <label for="data"> Data:</label>
      <input type="text" class="form-control" id="data" placeholder="Data">
      </div>
      <div class="form-group">
      <label for="descricao">Descrição:</label>
      <input type="text" class="form-control" id="descricao"  placeholder="Descrição">
      </div>
      <div class="form-group">
      <label for="login">Login:</label>
      <input type="text" class="form-control" id="login" placeholder="Login">
      </div>
      <div class="form-group">
      <label for="login">Plano:</label>
      <input type="integer" class="form-control" id="plano" placeholder="Plano">
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Valor:</label>
      <input type="number" class="form-control" id="valor" placeholder="valor">
      </div>
      <button onclick="deposito()" class="btn btn-primary">Confirmar</button>
    </form>

</section>
        `
        return view
    },

    after_render: async () => {


    }
}

export default Deposito;



$(function(){

let user_data = JSON.parse(localStorage.getItem('userDataAccount'));
let nome_cliente = document.getElementById('nome_cliente');
nome_cliente.textContent = user_data.usuario.nome;
let conta = document.getElementById('conta');
conta.textContent ="R$"+user_data.conta.saldo+",00";
let conta_credit = document.getElementById('cont_credito');
conta_credit.textContent = "R$"+user_data.contaCredito.saldo+",00";
let inicio_conta = document.getElementById('iniconta')
inicio_conta.textContent = user_data.dataInicio;

let fim_conta = document.getElementById('fim_conta');
            if (fim_conta != '') {
                fim_conta.textContent = user_data.dataFim;
            } else {
                fim_conta.textContent ="Conta ativa!"
            }


var cont = Object.keys(user_data.conta).length;
});


// Metodo para excluir conta 
function excluir_conta(id, rota){

}







    