import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";

export default function Header() {
    const navigate =useNavigate()
    return (
        <header className="header">
            <div className="logo">Anna Novi</div>
            <Menu/>
            <Button className="buttom-contact" onClick={() => navigate('contacts')} label="Contacts"/>
        </header>

    )
}