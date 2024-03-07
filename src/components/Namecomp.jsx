import circle1 from '../img/circle1.jpg'

const Namecomp = () => {

    const name = "LOUISE ERIKSSON"
    const title = "Frontend Developer"
    
    return ( 
        <div className="nameComp">
            <img src={circle1} alt="" />
            <div id="Name">
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
        </div>

     );
}
 
export default Namecomp;