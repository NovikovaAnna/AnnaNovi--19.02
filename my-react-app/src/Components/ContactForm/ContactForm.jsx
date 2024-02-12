import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import close from '../../assets/close.svg';
import './ContactForm.css';

export default function ContactForm({ onClick }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    return (
        <div className="blackout" onClick={(e) => e.target.className="blackout" && onClick()}>
            <div className="close-button" onClick={onClick}>
                <img src={close} alt="Close"/>
            </div>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email", { required: true })} id="email"/>
                    {errors.email && <span>Email is required</span>}
                </div>
                <div>
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" {...register("tel", { required: true })} id="tel"/>
                    {errors.tel && <span>Phone is required</span>}
                </div>
                <div className="comment">
                    <label htmlFor="comment">Comment</label>
                    <textarea cols="35" rows="3" {...register("message", { required: true })} id="comment"></textarea>
                    {errors.message && <span>Message is required</span>}
                </div>
                <div>
                    <Button type="submit" className={'button-form'} label="Send" onClick={() => {}} />

                </div>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    onClick: PropTypes.func.isRequired
};
