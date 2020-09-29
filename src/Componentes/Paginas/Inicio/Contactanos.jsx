import React from "react"
import "./Styles.css"

class Contactanos extends React.Component{

  render(){
    return(
      <div class="container container--contacto">
            <div class="left-1 left-1--contacto">
                <h1 class="quees__titulo1 quees__titulo1--contacto">
                    Contacto.
                </h1>
                <div class="iconos-contacto">
                    <i class="fas fa-phone-alt icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">3103228042-5887092</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fab fa-facebook icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">Smart Energy</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fab fa-instagram icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">@Smart_Energy</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fas fa-envelope icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">SmartEnergy@gmail.com</h3>
                </div>
                <div class="iconos-contacto">
                    <i class="fas fa-clock icons-contacto__1"></i>
                    <h3 class="iconos-contacto__titulo">Lunes a viernes de 8am a 10pm</h3>
                </div>
            </div>
            <div class="right-1 right-1--contacto">
                <img src="" alt="" className="contacto"/>
            </div>
        </div>
    )
  }

}
export default Contactanos;