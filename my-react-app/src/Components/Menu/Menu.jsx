import {Link} from "react-router-dom";
import './Menu.css'

export default function Menu() {
    const MENU = [
        { text: 'To the main page', path: '/' },
        { text: 'Portfolio', path: '/portfolio' },
        { text: 'Reviews', path: '/reviews' },
        { text: 'Blog', path: '/blog' }
    ];

    return (
        <ul className="menu">
            {MENU.map((item, i) => (
                <li key={`${i}-menu-item`}>
                    <Link to={item.path}>{item.text}</Link>
                </li>
            ))}
        </ul>
    );
}
