import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HomePageStyle } from "./HomePageStyle";

export default function HomePage({movies, setMovies}) {
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then(resp => setMovies(resp.data));
        promise.catch(console.log("Algo de errado não está certo"));
    }, []);

    return(
        <HomePageStyle>
            <h1>Selecione o filme</h1>
            <div className="catalog">
            {movies.map((movie) => (
                <Link to={`/sessoes/${movie.id}/`}>
                    <img src={movie.posterURL} alt={movie.title} />
                </Link>
            ))}
            </div>
        </HomePageStyle>
    );
}