import './menu.css';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' href="https://www.instagram.com/jeffin.souza21/" target='blanck'>
                <BsInstagram color='#fff' size={24

                } />
            </a>
            <a className='social' href="https://www.linkedin.com/in/jefferson-santos-33645521a/" target='blank'>
                <FaLinkedin color='#fff' size={27} />
            </a>

            <Link className='menu-item' to='links'>
                Meus Links
            </Link>
        </div>
    )
}