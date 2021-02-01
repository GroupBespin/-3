import baseURL from '../../service/baseURL.js'

let Sign = {
    render: async () => {
        let view = `
        <div class="container area-200">
        <div class="row">
          <div class="col">
            <h1 class="about---register-title text-black">Dados Pessoais</h1>
            <form class="g-3">
              <div class="col-md-10">
                <label for="validationDefault01" class="form-label">Nome</label>
                <input type="text" class="form-control" id="validationDefault01" value="" required>
              </div>
              <div class="col-md-10">
                <label for="validationDefault02" class="form-label mt-3">Email</label>
                <input type="text" class="form-control" id="validationDefault02" value="" required>
              </div>
              <div class="col-md-10">
                <label for="validationDefaultUsername" class="form-label mt-3">CPF</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
                </div>
              </div>
              <div class="col-md-10">
                <label for="validationDefault03" class="form-label mt-3">Senha</label>
                <input type="password" class="form-control" id="validationDefault03" required>
              </div>
              <div class="col-md-3">
                <label for="validationDefault04" class="form-label mt-3">Estado</label>
                <select class="form-select" id="validationDefault04" required>
                  <option selected disabled value="">Escolha</option>
                  <option>CE</option>
                  <option>PE</option>
                  <option>PB</option>
                  <option>BA</option>
                  <option>RO</option>
                  <option>MA</option>
                  <option>SP</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="validationDefault05" class="form-label mt-3">CEP</label>
                <input type="text" class="form-control" id="validationDefault05" required>
              </div>
              <div class="col-12">
                <button id="submit_new_register" class="btn btn-dark mt-3">Enviar</button>
              </div>
            </form>
          </div>
          <div class="col">
              <img src="../IMG/cadastro.jpg" />
          </div>
        </div>
      </div>
        `
        return view
    },

    after_render: async () => {
      document.getElementById('submit_new_register').addEventListener('click', () => {
          let nameVal = document.getElementById('fname').value,
              userMail = document.getElementById('username').value,
              passwordVal = document.getElementById('password').value,
              RepasswordVal = document.getElementById('re_password').value,
              CPF = document.getElementById('cpf').value.replace(/[^\d]/g, "")
              console.log(CPF)
          
          if ( passwordVal === RepasswordVal ){

              axios.post(`${baseURL}usuarios`, {
                  cpf: CPF,
                  login: userMail,
                  nome: nameVal,
                  senha: passwordVal
              },
               {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
              .then( res => {
                  if ( res.status === 200 ){
                      window.location.replace('#/login')
                      // localStorage.setItem('@token',res.data.token)
                      // document.userDatAccount = res.data
                  }
              })

          } else {
              alert('confira sua senha!')
          }
      })
  }
}

export default Sign;







// const url = 'https://accenture-java-desafio.herokuapp.com/';

// async function singup(){
//     let nameVal = document.getElementById('validationDefault01').value,
//         userMail = document.getElementById('validationDefault02').value,
//         passwordVal = document.getElementById('validationDefault03').value,
//         CPF = document.getElementById('validationDefaultUsername').value.replace(/[^\d]/g, "")
        
//         axios.post(`${url}usuarios`, {
//             cpf: CPF,
//             login: userMail,
//             nome: nameVal,
//             senha: passwordVal
//         }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then( res => {
//             if ( res.status === 200 ){
//                 console.log("cadastrou");
//                // window.location.replace('#/login')
//             }
//         }).catch((err) => {
//             alert( err.response.data.error);
//         })
// }