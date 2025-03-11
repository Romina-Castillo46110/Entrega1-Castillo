import '../style/Button.css'
//no se mandan los props como si fueran parámetros, solo se coloca uno
//los parámetros de un componente son siempre un objeto
export const Button = (props) =>  {
    return (
        <button className="btn">soy un boton</button>
    )
}