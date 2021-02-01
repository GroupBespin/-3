
let Home = {
    render: async () => {
        let view = `
        <section class="banner">
        <div class="banner--box">
          <a class="btn btn-success" href="signup.html">Solicitar uma Conta</a>
        </div>
        <section class="commitment area-100">
          <div class="commitment--box">
            <div>
              <h1 class="commitment--box-title dark--text">O que tem de novo</h1>
              <p class="commitment--box-text">
                Pix é um meio de pagamento eletrônico do Brasil lançado oficialmente no 
                dia 5 de outubro de 2020, com início de funcionamento integral em 16 
                de novembro de 2020. 
              </p>
            </div>
            <img class="img-fluid" src="../IMG/Logo.png" width="400" height="270" alt="Big coin" />
          </div>
      </section>
      <section class="about area-100">
        <div class="about--row">
          <div class="about--wrapper">
            <h3 class="text-bg">Pix</h3>
            <p class="about--row-text text-bg">
              um novo jeito de fazer transferências e pagamentos
            </p>
          </div>
          <div class="about--image-left">
          </div>
        </div>
      </section>
      </section> 
        `
        return view
    },

    after_render: async () => {


    }
}

export default Home;

