import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Body } from "./AppStyle";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import Sessions from "./Sessions/Sessions";
import Seats from "./Seats/Seats";


function App() {
  const [movies, setMovies] = useState([]);
  const [session, setSession] = useState([]);
  const [sessionSeats, setSeats] = useState([]);
  
  return (
    <BrowserRouter>
      <Body>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} setMovies={setMovies} />} />
          <Route path="/sessoes/:movieId" element={<Sessions session={session} setSession={setSession} />} />
          <Route path="/assentos/:sessionId" element={<Seats sessionSeats={sessionSeats} setSeats={setSeats}/>}/>
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;
