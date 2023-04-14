import "./App.css"
import Titulo from "./components/Titulo"
const App = () => {
    const formatUserName = (userName) => `@${userName}`
    return(
        <>
            <Titulo 
            formatUser={formatUserName} 
            name={"rodrigo"} 
            userName={"rodrigo@gmail.com"} 
>
                hello
            </Titulo> 

            <Titulo 
            formatUser={formatUserName} 
            name={"pablo"} 
            userName={"pablo@gmail.com"} 
>
                HELO
            </Titulo>

            <Titulo 
            formatUser={formatUserName} 
            name={"gabriel"} 
            userName={"gabriel@gmail.com"} 
>
                REE
            </Titulo>
        </>
        )
}

export default App 