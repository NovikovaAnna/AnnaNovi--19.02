import Layout from "../../Components/Layout/Layout.jsx";
import Button from "../../Components/Button/Button.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm.jsx";
import { Fragment, useState } from "react";
import photo from '../../assets/photo.jpg';
import './Main.css';

export default function Main() {
    const [formState, displayForm] = useState(false);
    return (
        <Fragment>
            <Layout className='main'>
                <div className='container'>
                    <div className='textContainer'>
                        <span className="rectangle"></span>
                        <h1 className='heading'>My name is Novikova Anna</h1>
                        <div className='desc'>I am marketing manager</div>
                        <Button className="formButton" onClick={() => displayForm(true)} label="Contact me"/>
                    </div>
                    <img className='photo' src={photo} alt="Photo of Novikova Anna"/>
                </div>
            </Layout>
            {formState && <ContactForm onClick={() => displayForm(false)} />}
        </Fragment>
    );
}

