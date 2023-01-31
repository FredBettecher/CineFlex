import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Body } from "./assets/style/AppStyle";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import Sessions from "./pages/Sessions/Sessions";
import Seats from "./pages/Seats/Seats";
import Success from "./pages/Success/Success";

function App() {
  const [movies, setMovies] = useState([]);
  const [session, setSession] = useState([]);
  const [sessionSeats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatIndex, setSeatIndex] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  
  return (
    <>
    <BrowserRouter>
      <Body>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} setMovies={setMovies} />} />
          <Route path="/sessoes/:movieId" element={<Sessions session={session} setSession={setSession} />} />
          <Route path="/assentos/:sessionId" element={<Seats sessionSeats={sessionSeats} setSeats={setSeats}
          selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} seatIndex={seatIndex} setSeatIndex={setSeatIndex} name={name} cpf={cpf} setName={setName} setCpf={setCpf}/>} />
          <Route path="/sucesso" element={<Success sessionSeats={sessionSeats} selectedSeats={selectedSeats} seatIndex={seatIndex} name={name} cpf={cpf}/>} />
        </Routes>
      </Body>
    </BrowserRouter>
    </>
  );
}

export default App;
