
import './erro.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='container-error'>
            <img src="../erro404.jpg" alt="Pagína não encontrada !" />
            <h1>Página não encontrada!</h1>
            <Link className='button-error' to='/'>
                Voltar para Home
            </Link>
        </div>
    )
}