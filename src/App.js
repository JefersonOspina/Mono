import React from "react";
import "./styles.css";

import Navbar from "./Componentes/Paginas/Inicio/Navbar"
import Banner from "./Componentes/Paginas/Inicio/Banner"
import Seccion1 from "./Componentes/Paginas/Inicio/Seccion1"
import Seccion2 from "./Componentes/Paginas/Inicio/Seccion2"
import Nosotros from "./Componentes/Paginas/Inicio/Nosotros"
import Contactanos from "./Componentes/Paginas/Inicio/Contactanos"

export default function App() {
  return (
    <body>
            <Navbar/>
            <Banner/>
            <Seccion1/>
            <Seccion2/>
            <Nosotros/>
            <Contactanos/>
    </body>
  );
}
