function Lista(){
    const lista = []
    for(var i = 1; i <= 10; i++){
        lista.push(<li>{i} </li>)
    }
    return lista
}
export default function jsx1() {
    
    return(
        <div>
            {Lista()}
        </div>
    )
}