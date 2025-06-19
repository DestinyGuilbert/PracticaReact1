import react from "react";
import '../Style_sheets/Testimonio.css';

function Testimonio() {
    return(
      <div className="contenedor-testimonio">
        <img
        className="imagen-testimonio"
        src={require('../Imagenes/2.jpg')}
        alt="1era Maravilla"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">Emma bostian en suecia </p>
          <p className="cargo-testimonio">Ingeniera de Software Spotify </p>
          <p className="texto-testimonio">Siempre he tenido problemas pra aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habildidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify </p>
        </div>
      </div>
    );
}

export default Testimonio;