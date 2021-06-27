// Botón que carga una nueva cita
const NewQuoteButton = (props) => {
    return (
        // Contenedor del botón
        <div className = "btn-container">
            {/* Botón con el color y la función dados en props */}
            <button 
            style={{backgroundColor: props.backgroundColor}}
            onClick = {props.click}> <span>New quote</span> </button>
        </div>
    )
}

export default NewQuoteButton;