import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SeatsStyle } from "./SeatsStyle";
import { Link } from "react-router-dom";

export default function Seats({sessionSeats, setSeats, selectedSeats, setSelectedSeats, seatIndex, setSeatIndex, name, setName, cpf, setCpf}) {
    const { sessionId } = useParams();
    const isSelected = (seat) => {
        return selectedSeats.includes(seat);
      };
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);
        promise.then(resp => setSeats(resp.data));
    }, []);

    function selectSeat(seat, index) {
        if(!isSelected(seat)) {
            setSelectedSeats((selectedSeats) => [...selectedSeats, seat]);
            setSeatIndex((seatIndex) => [...seatIndex, index]);
        } else {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
            setSeatIndex(seatIndex.filter((i) => i !== index));
          }
    }

    function handleClick(seat) {
        if (seat.isAvailable === true) {
            return selectSeat(seat.id, parseInt(seat.name));
        } else {
            return alert("Esse assento não está disponível");
        }
    }

    function seatColors(seat) {
        if(seatIndex.includes(parseInt(seat.name))) {
            return 'selected-circle';
        } else if(seat.isAvailable === true && !isSelected(seat)){
            return 'available-circle';
        } else if(seat.isAvailable === false && !isSelected(seat)) {
            return 'unavailable-circle';
        }
    }

    function buySeats(event){
        event.preventDefault();

        const postSeats = {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        }
        
        return axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", postSeats);
    }
    
    return(
        <SeatsStyle>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats-box">
                <div className="seats">
                    {sessionSeats?.seats?.map((s, index) => (
                        <div className={`seat ${seatColors(s)}`}
                        onClick={() => handleClick(s, index)}>{s.name}</div>
                    ))}
                </div>
                <div className="seat-status">
                    <div className="seat-status-box"><div className="selected-circle"></div><p>Selecionado</p></div>
                    <div className="seat-status-box"><div className="available-circle"></div><p>Disponível</p></div>
                    <div className="seat-status-box"><div className="unavailable-circle"></div><p>Indisponível</p></div>
                </div>
            </div>
            <div className="inputs-box">
                <form>
                    <h3>Nome do comprador:</h3>
                    <input type="text" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)}/>
                    <h3>CPF do comprador:</h3>
                    <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)}/>
                    <span className="centralize"><button onClick={buySeats}><Link to='/sucesso'>Reservar assento(s)</Link></button></span>
                </form>
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