import { Link } from "react-router-dom";
import { SuccessStyled } from "./SuccessStyle";

export default function Success({sessionSeats, seatIndex, name, cpf}) {
    return(
        <SuccessStyled>
            <h1>Pedido feito com sucesso!</h1>
            <div className="container">
                <div className="info-box">
                    <h2>Filme e Sessão</h2>
                    <p>{sessionSeats?.movie?.title}</p>
                    <p>{sessionSeats?.day?.date} {sessionSeats?.name}</p>
                </div>
                <div className="info-box">
                    <h2>Ingressos</h2>
                    {seatIndex?.map((i) =>(
                        <div className="seats">
                            <p>Assento {i}</p>
                        </div>
                    ))}
                </div>
                <div className="info-box">
                    <h2>Comprador</h2>
                    <p>{name}</p>
                    <p>{cpf}</p>
                </div>
                <button><Link to="/">Voltar pra Home</Link></button>
            </div>
        </SuccessStyled>
    );
}