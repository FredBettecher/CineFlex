import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SeatsStyle } from "./SeatsStyle";

export default function Seats({sessionSeats, setSeats}) {
    const { sessionId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);
        promise.then(resp => setSeats(resp.data));
    }, []);

    return(
        <SeatsStyle>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats-box">
                <div className="seats">
                    {sessionSeats?.seats?.map((s) => (
                        <div className="seat">{s.name}</div>
                    ))}
                </div>
                <div className="seat-status">
                    <div className="seat-box"><div className="selected-circle"></div><p>Selecionado</p></div>
                    <div className="seat-box"><div className="available-circle"></div><p>Disponível</p></div>
                    <div className="seat-box"><div className="unavailable-circle"></div><p>Disponível</p></div>
                </div>
            </div>

            <footer>
                <img src={sessionSeats?.movie?.posterURL} alt={sessionSeats?.movie?.title}/>
                <div className="footer-text">
                    <h2>{sessionSeats?.movie?.title}</h2>
                    <h2>{sessionSeats?.day?.weekday} - {sessionSeats?.name}</h2>
                </div>
            </footer>
        </SeatsStyle>
    );
}