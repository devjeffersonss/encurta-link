import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'
import Footer from '../../components/Footer';

export default function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShotLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShowModal(true);
            saveLink('@encurtalink', response.data)
            setLink('')
        } catch {
            alert('Copie é cole seu link aqui!')
        }
    }
    return (
        <div className='container-home'>
            <div className="logo">
                <img src="/img-link.jpg" alt="LinK-img-logo" className="link-img-logo" />
                <h1>Encurta Link</h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color='#fff' />
                    <input placeholder='Cole seu link aqui...'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShotLink}>
                    Encurtar Link
                </button>

            </div>

            <Menu />

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
            <Footer />

        </div>
    )
}