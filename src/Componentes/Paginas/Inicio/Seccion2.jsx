import React from "react";
import "./Styles.css";

class Seccion2 extends React.Component {
  render() {
    return (
      <section class="quees-proyecto" id="quees-section">
        <div class="container">
          <div class="left-1 left-1--quees">
            <h1 class="quees__titulo1 quees__titulo1--proyecto">¿Qué es?</h1>
            <p class="quees__parrafo">
              Smart Energy es un aplicativo web, en el cual directivas de las
              empresas o personas del común requieran el servicio de energía
              solar en su empresa u hogar, puedan analizar y mantenerse al tanto
              de todo lo que pasa con su energía; El servicio le ofrece un panel
              solar y la información necesaria para ingresar a la página, ya que
              en esta se podran garantizar todas las estádisticas, ya sean de
              cuanta energía recoge el panel en el día, cuanta consume la
              empresa u hogar, etc. Esta le garantizará mejores resultados
              gracias al panel, y estarías ayudando al medio ambiente.
            </p>
          </div>
          <div class="right-1 right-1--quees">
            <div className="container__">
              <img
                src="https://www.ecoticias.com/userfiles/extra/GGBZ_94.jpg"
                alt=""
                className="container__img"
              />
            </div>
          </div>
        </div>
        <div class="container" id="Beneficios">
          <div class="left-1 left-1--Beneficios">
            <div className="container__"></div>
          </div>
          <div class="right-1 right-1--Beneficios">
            <h1 class="quees__titulo1 quees__titulo1--beneficios">
              Beneficios.
            </h1>
            <h2 class="quees__titulo2 quees__titulo2--beneficios">
              Energías renovables.
            </h2>
            <div className="container__"></div>
          </div>
        </div>
        <div class="container">
          <div class="left-1 left-1--Beneficios2">
            <ul class="lista__Beneficios">
              <li class="Beneficios-items">
                <img src="" alt="" className="viñetaimg" />
              </li>
              <li class="Beneficios-items">
                <img src="" alt="" className="viñetaimg" /> Disminución de la
                energía por medio de combustibles fósiles.
              </li>
              <li class="Beneficios-items">
                <img src="" alt="" className="viñetaimg" /> Ahorros económicos
              </li>
            </ul>
          </div>
          <div class="right-1 right-1--Beneficios2">
            <ul class="lista__Beneficios">
              <li class="Beneficios-items">
                <img src="" alt="" className="viñetaimg" /> Análisis y
                estádisticas controladas por usted mismo.
              </li>
              <li class="Beneficios-items">
                <img src="" alt="" className="viñetaimg" /> Se evitaría muchos
                problemas de salud.
              </li>
              <li class="Beneficios-items">
                <img src="" alt="" className="viñetaimg" /> Mejoras tecnólogicas
                e integración de la quinta revolución industrial.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default Seccion2;
