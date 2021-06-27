// De está manera podemos guardar la imagen en una variable
import twitterIcon from "./images/twitter-icon.png";

// Botón que crea un tweet con la cita (Aún no puede hacerlo)
const TwitterButton = (props) => {
    return (
        // Contenedor del botón
        <div className = "btn-container">
            {/* Botón con el color dado en props */}
            <button style={{backgroundColor: props.backgroundColor}}>
                {/* Imagen del ícono de twitter */}
                <img src = {twitterIcon} alt = "ícono de twitter"/>
            </button>
        </div>
    )
}

export default TwitterButton;