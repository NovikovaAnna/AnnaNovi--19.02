import './Slider.css'
import {string} from "prop-types";
import ContactForm from "../ContactForm/ContactForm.jsx";

export default function Slide({src, text}){
    return (
        <div className="slide">
            <img className="slide-img" src={src}></img>
            <h2 className="slide-desc">{text}</h2>
        </div>
    )
}

ContactForm.propTypes = {
    src: string,
    text: string
}