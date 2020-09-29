import React from "react";
import "./Styles.css";

class Banner extends React.Component {
  render() {
    return (
      <body className="Banner">
        <div className="nombre">
          <div className="nombre-texto">
            <h2 className="nombre__titulo2">
              Energía solar para tu empresa u hogar
            </h2>
          </div>
          <div className="nombreimg">
            <img
              className="nombre-img__1 nombreimg-area"
              src="https://4.imimg.com/data4/CA/DO/MY-5826968/epchub7-500x500.jpg"
              alt=""
            />
          </div>
        </div>
      </body>
    );
  }
}
export default Banner;
