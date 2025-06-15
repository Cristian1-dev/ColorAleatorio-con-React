import '../estilos/boton.css'
// recibo como argumento la funcion cambio que envio desde App.jsx
export const Boton = ({cambio}) => {
    return (
        <button id="boton" onClick={cambio}>Cambiar Color</button>
    )
}