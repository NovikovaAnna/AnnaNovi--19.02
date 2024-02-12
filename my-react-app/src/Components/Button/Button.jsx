import PropTypes from 'prop-types';

export default function Button({ onClick, className, label }) {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    label: PropTypes.string.isRequired // Если label является обязательным, добавьте isRequired
};

