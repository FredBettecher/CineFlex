import { Link } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";

export default function Header() {
    return(
        <HeaderStyle><Link to="/">CINEFLEX</Link></HeaderStyle>
    );
}