const Titulo = ({name, userName, isFollow, formatUser, children}) => {
    const imgT = `https://unavatar.io/${name}`
    return(
        <article>
        <header>
            <img alt="avatar" src={imgT}/>
            <div>
                <strong>{children}</strong>
                <span>{formatUser(userName)}</span>
            </div>
        </header>
        <button>seguir</button>
    </article>
    )
}
export default Titulo 