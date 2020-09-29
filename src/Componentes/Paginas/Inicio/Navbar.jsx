import React from "react"

import "./Styles.css"
class Navbar extends React.Component{

  render(){
    return(
      <header className="header">
        <div className="divh1header">
            <h1 className="div1header__h1">
               <img className="" src="https://i.imgur.com/OMAKWLE.png" alt="" width="100px" height="100px"/>Smart Energy
            </h1>
        </div>
        <nav className="menu_menu">
        <div className="divmenu">
            <ul className="menu">
                <li className="menu__items"><a class="menu_link" href="">Iniciar Sesion</a></li>
                <li className="menu__items"><a class="menu_link" href="#quees-section">¿Qué es?</a></li>
                <li className="menu__items"><a class="menu_link" href="#Beneficios">Beneficios</a></li>
                <li className="menu__items"><a class="menu_link" href="#Nosotros">Nosotros</a></li>
                <li className="menu__items"><a class="menu_link" href="#contacto--section">Contáctenos</a></li>
            </ul>
            <li className="menu__items"><a className="menu_link" href="">Estádisticas</a></li>
        </div>
        </nav>
    </header>
    )
  }

}
export default Navbar;