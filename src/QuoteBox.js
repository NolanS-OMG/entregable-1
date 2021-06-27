// Esta función crea un elemento div con la cita y el autor
const QuoteBox = (props) => {
    return (
        <div className = "quote-box">
            {/* Este h3 tiene la cita que recoge de props.quote */}
            <h3 style={{color: props.letterColor}}>"{props.quote}"</h3>
            {/* Este p tiene el autor que recoge de props.author */}
            <p style={{color: props.letterColor}}>- {props.author}</p>
        </div>
    )
}

export default QuoteBox;