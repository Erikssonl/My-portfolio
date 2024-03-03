import '../style/App.css'

const Namecomp = () => {

    const name = "LOUISE ERIKSSON"
    const title = "Frontend Developer"
    return ( 
        <div className="nameComp">
            <img src="/img/Group\2.jpg" alt="" />
            <div id="Name">
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
        </div>

     );
}
 
export default Namecomp;