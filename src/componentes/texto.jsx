import '../estilos/texto.css'

// recibo como argumento color que le envio desde App.jsx

export const Texto = ({color}) => {
    return (
        <div id="texto">{color}</div>
    )
}