

let Footer = {
    render: async () => {
        let view = `
        <footer class="site-footer mt-5" style="background-color:white;">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Institucional:</h6>
              <p class="text-justify">
                <li>
                  <a href="">Historia</a>
                </li>
                <li>
                  <a href="">Tecnologia e Controle de
                    Qualidade</a>
                </li>
              </p>
            </div>
  
            <div class="fale col-xs-6 col-md-3">
              <h6>Fale Conosco</h6>
              <ul class="footer-links">
                <li>
                  <P> +55 (99) 0000-9999</P>
                </li>
              </ul>
            </div>
          </div>
          <hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2020 Todos os direitos são reservados à BANKAVERA
              </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="">
                    <img class="redesimg" src="../IMG/ImagemFacebook.jpg"></a></li>
                <li><a class="twitter"
                    href="/">
                    <img class="redesimg" src="../IMG/ImagemLinkedIn.jpg"></a></li>
                <li><a class="dribbble" href="">
                    <img class="redesimg" src="../IMG/ImagemInstagram.jpg"></a></li>
                <li><a class="youtube" href="">
                    <img class="redesimg" src="../IMG/ImagemYoutube.png"></a></li>
                <li><a class="flickr" href="">
                    <img class="redesimg" src="../IMG/ImagemFlicker.png"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        `
        return view
    },
  
    after_render: async() => {
  
  
    }
  }
  
  export default Footer;