

let Nav = {
    render: async () => {
        let view = `    <header class="header container-fluid">
        <div class="header--wrapper">
          <a  href="index.html">
            <img src="../IMG/Logo.png">
          </a>
          <div class="header--nav">
            <a class="navbar-link nav-color" href="#">Serviços</a>
            <a class="navbar-link nav-color" href="#/login">Login</a>
            <a class="navbar-link nav-color" href="#/sign">Cadastrar</a>
          </div>
        </div>
      </header>`
        
        return view
    },
  
    after_render: async () => {
  
  
    }
  }
  
  export default Nav;