import { ValoresCarta, PalosColores } from "../constants";
import CardImg from "../assets/card.png";
import "./Card-module.css";
export default function Card ({flipped = false}) {
    const ValorCarta = ValoresCarta[Math.floor(Math.random()*ValoresCarta.length)];
    const infoCarta = PalosColores[Math.floor(Math.random()*PalosColores.length)];
    const style = {
        color: infoCarta.color
    };
    return (
        flipped ?
            <div className="card">
                <span className="card-suit card-suit-top" style={style}>{infoCarta.icono}</span>
                <span className="card-suit card-suit-bottom" style={style}>{infoCarta.icono}</span>
                <span className="card-value" style={style}>{ValorCarta}</span>
            </div>
        : 
        <img className="card" src={CardImg} alt="CardBack" />
    )
}