import { useState } from "react"

const Titulo = ({name, userName, formatUser, children}) => {
    const [isFollow, setIsFollow] = useState(false)

    const handleClick = () => {
        setIsFollow(!isFollow)
    }

    const imgT = `https://unavatar.io/${name}`


    const text = isFollow ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollow ? 'is_following' : ''
    return(
        <article>
        <header>
            <img alt="avatar" src={imgT}/>
            <div>
                <strong>{children}</strong>
                <span>{formatUser(userName)}</span>
            </div>
        </header>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
    </article>
    )
}
export default Titulo 