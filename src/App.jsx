import "./App.css"
import Titulo from "./components/Titulo"
import ButtonConsole from "./components/ButtonConsole"
const App = () => {
    const formatUserName = (userName) => `@${userName}`
    const funcSole = () => console.log('hello world')
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
            <ButtonConsole func={funcSole}/>
        </>
        )
}

export default App 