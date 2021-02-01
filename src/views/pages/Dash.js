
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

let Dash = {
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
    <h1>Informações do cliente: <b id="nome_cliente"></b></h1>
  </div>

  <a class="btn btn-primary badge-sm" href="#/deposito"
  role="button" id="id_excluir_conta">Fazer deposito</a>
  <div class="information--wrapper">
    <div class="information--table">
      <table class="table table-striped caption-top">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>
          <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>            <tr>
            <th scope="row">00/00/0000</th>
            <td>Boleto Banco</td>
            <td class="red--text">R$ 000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</section>
        `
        return view
    },

    after_render: async () => {


    }
}

export default Dash;



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

// for( let i =0; cont; i++){
//     var val_ul = document.getElementById('id_ul');
//     val_ul.innerHMTL=`<li> user_data.conta[i]</li>` 
// }
});


// Metodo para excluir conta 
function excluir_conta(id, rota){

}






// $(function(){

// let user_data = JSON.parse(localStorage.getItem('userDataAccount'));
// let nome_cliente = document.getElementById('nome_cliente');
// nome_cliente.textContent = user_data.usuario.nome;
// let conta = document.getElementById('conta');
// conta.textContent ="R$"+user_data.conta.saldo+",00";
// let conta_credit = document.getElementById('cont_credito');
// conta_credit.textContent = "R$"+user_data.contaCredito.saldo+",00";
// let inicio_conta = document.getElementById('iniconta')
// inicio_conta.textContent = user_data.dataInicio;

// let fim_conta = document.getElementById('fim_conta');
//             if (fim_conta != '') {
//                 fim_conta.textContent = user_data.dataFim;
//             } else {
//                 fim_conta.textContent ="Conta ativa!"
//             }


// var cont = Object.keys(user_data.conta).length;

// // for( let i =0; cont; i++){
// //     var val_ul = document.getElementById('id_ul');
// //     val_ul.innerHMTL=`<li> user_data.conta[i]</li>` 
// // }
// });



// function excluir_conta(id, rota){

// }






    