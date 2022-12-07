import axios from "axios";
import { useEffect, useState } from "react";
import { HomePageStyle } from "./HomePageStyle";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then(resp => setMovies(resp.data));
        promise.catch(error => console.log("erro"));
        console.log(movies);
    }, []);

    return(
        <HomePageStyle>
            <header>CINEFLEX</header>
            <h1>Selecione o filme</h1>
            <div className="catalog">
            {movies.map((movie) => (
                <img src={movie.posterURL} alt={movie.title}/>
            ))}
            </div>
        </HomePageStyle>
    );
}