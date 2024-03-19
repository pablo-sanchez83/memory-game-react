import CardImg from "../assets/card.png";
import "./Card-module.css";
export default function Card ({flipped = false, valor, color, icono, handlePlay}) {
    const style = {
        color: color
    };
    return (
        flipped ?
            <div className="card">
                <span className="card-suit card-suit-top" style={style}>{icono}</span>
                <span className="card-suit card-suit-bottom" style={style}>{icono}</span>
                <span className="card-value" style={style}>{valor}</span>
            </div>
        : 
        <button onClick={handlePlay}><img className="card" src={CardImg} alt="CardBack" /></button>
    )
}