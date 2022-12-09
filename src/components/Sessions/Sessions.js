import axios from "axios";
import { useEffect } from "react";
import { SessionsStyle } from "./SessionsStyle";
import { Link, useParams } from "react-router-dom";

export default function Sessions({session, setSession}) {
    const { movieId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);
        promise.then(resp => setSession(resp.data));
        promise.catch(console.log("Algo de errado não está certo"));
    }, []);

    return(
        <SessionsStyle>
            <h1>Selecione o horário</h1>
            <div className="session">
                {session?.days?.map((s) => (
                        <>
                            <div className="date">{s.weekday} - {s.date}</div>
                            <div className="time-box">
                            {s?.showtimes?.map((st) =>(
                                <Link to={`/assentos/${st.id}`}><div className="time">{st.name}</div></Link>
                            ))}
                            </div>
                        </>
                    ))}
            </div>
            <footer>
                <img src={session.posterURL} alt={session.title}/>
                <h2>{session.title}</h2>
            </footer>
        </SessionsStyle>
    );
}