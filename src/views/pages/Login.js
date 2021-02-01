import baseURL from '../../service/baseURL.js'
// import IsAuthenticated from '../../service/isAuth.js'

let Login = {
    render : async () => {
        // let IsAuth = await IsAuthenticated(localStorage.getItem('@token'), 'dashboard');
        let view = `
       
    <section>
    <div class="container">
      <div class="login d-flex align-items-center justify-content-center vh-100">
        <div class="login--box">
          <h1 class="about--login-title text-black">Login</h1>
          <form class="g-3">
            <div class="col-md-10">
             <div class="form-group mt-3">
              <label for="inputUser">Usuário</label>
              <input type="text" class="form-control" id="inputUser" placeholder="Usuário">
            </div>
            </div>
            <div class="col-md-10">
              <div class="form-group mt-3">
              <label for="inputPassword">Senha</label>
              <input type="password" class="form-control" id="inputPassword" placeholder="Senha">
            </div>
            </div>
            <button type="button" class="btn btn-dark mt-3" id="login_start">Logar</button>
          </form>
        </div>
        <img class="img-fluid" src="../IMG/login.jpg" >
      </div>
    </div>
  </section>
        `
        return view
    },

    after_render: async () => {
      document.getElementById('login_start').addEventListener('click', () => {
          let nameUser = document.getElementById('inputUser').value,
              userPass = document.getElementById('inputPassword').value
          
          if ( nameUser.length >= 4 && userPass.length >= 4 ){

              axios.post(`${baseURL}login`, {
                  usuario: nameUser,
                  senha: userPass,
              })
              .then( res => {
                      if ( res.status === 200 ){
                          window.location.replace('#/dashboard')
                          localStorage.setItem('@token',res.data.token)
                          document.userDataAccount = res.data;
                          localStorage.setItem('userDataAccount', JSON.stringify(res.data))
                        //   localStorage.setItem('userDataAccount', JSON.stringify(res.data))
                      } 
                  
              }).catch((err) => {
                  alert( err.response.data.error)
                  window.location.replace('#/signup') 
              })

          } else {
              alert('Quantidade de caracteres inferior ao permitido')
          }
      })
  }
}

export default Login;





// const url = 'https://accenture-java-desafio.herokuapp.com/';
    
//     async function login(){
//             let nameUser = document.getElementById('inputUser').value,
//                 userPass = document.getElementById('inputPassword').value
            
//             if ( nameUser.length >= 4 && userPass.length >= 4 ){

//                 axios.post(`${url}login`, {
//                     usuario: nameUser,
//                     senha: userPass,
//                 })
//                 .then( res => {


//                         if ( res.status === 200 ){
//                             window.location.replace('/dash.html')
//                             document.userDataAccount = res.data;
//                             localStorage.setItem('userDataAccount', JSON.stringify(res.data))
//                             localStorage.setItem('@token', res.data.token)
//                         } 
                    
//                 }).catch((err) => {
//                     alert( err.response.data.error)
//                     window.location.replace('#/signup.html') 
//                 })

//             } else {
//                 alert('Quantidade de caracteres inferior ao permitido')
//             }
//     }