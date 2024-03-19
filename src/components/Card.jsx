import { ValoresCarta, PalosColores } from "../constants";
import CardImg from "../assets/card.png";
export default function Card ({flipped = false}) {
    const ValorCarta = ValoresCarta[Math.floor(Math.random()*ValoresCarta.length)];
    const infoCarta = PalosColores[Math.floor(Math.random()*PalosColores.length)];
    const style = {
        color: infoCarta.color    
    };
    return (
        flipped ?
            <div className="card">
                <span className="card-suit" style={style}>{infoCarta.icono}</span>
                <span className="card-value" style={style}>{ValorCarta}</span>
            </div>
        : 
        <img src={CardImg} alt="CardBack" />
    )
}