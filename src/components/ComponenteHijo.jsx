import Titulo from "./Titulo"
import Parrafo from "./Parrafo"
const ComponenteHijo = (props) => {
    return(
        <div>
            <Titulo titulo={props.title}/>
            <Parrafo parrafo={props.parrafo} />
        </div>   
    )
}
export default ComponenteHijo