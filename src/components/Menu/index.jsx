import './menu.css';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <section className='menu'>
            <a className='social' href="www.com">
                <BsInstagram color='#fff' size={24

                } />
            </a>
            <a className='social' href="www.com">
                <FaLinkedin color='#fff' size={24} />
            </a>

            <Link className='menu-item' to='links'>
                Meus Links
            </Link>
        </section>
    )
}