import React from "react";
import './Footer.css'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="container p-0">
      <div className="row m-0 p-0 ps-3">
        <div className="col p-0">

                <div className="row justify-content-around">
                  <div className="col-md-8 text-center">
                    <h4>TituloApp</h4>
                    <hr />
                    <div className="input-group justify-content-center mb-2">
                      <a href="https://www.facebook.com/tecmilpaalta2" className="redes" target="_blank" title="Facebook">
                        <i className="fab fa-facebook fa-2x mx-2"></i>
                      </a>
                      <a href="https://twitter.com/TecNMMilpaAlta2" className="redes" target="_blank" title="Twiter">
                        <i className="fab fa-twitter fa-2x mx-2"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCXJVuz9lnFc03mObS-0wYOg" className="redes" target="_blank" title="YouTube"
                      >
                        <i className="fab fa-youtube fa-2x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-md-6 align-self-center text-justify linea">
                    <h4>Contacto</h4>
                    <hr />
                    <div className="mx-auto d-block">
                      <h5>Email</h5>
                      <a href="emailto:TituloApp@gmail.com">TituloApp@gmail.com </a>
                    </div>
                  </div>

                  <div className="col-md-6 align-self-center">
                    <hr />
                    <div className="input-group justify-content-justify mb-2">
                      <div className="mx-auto d-block">
                        <a href="#">Registrate</a>
                      </div>
                    </div>
                  </div>
                
                </div>
              
            <div className="card-footer text-center">
              <p className="copyright">
                <i className="far fa-copyright"></i> Copyright {year} TituloApp - Todos los Derechos Reservados
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
