import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem({ closeModal, content }) {

    async function copyLink() {
        await navigator.clipboard.writeText(content.link)
        alert('Url Copiada com sucesso!')
    }
    return (

        < section className='modal-container' >
            <section className='modal-header'>

                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000' />
                </button>
            </section>

            <span>
                {content.long_url}
            </span>

            <div className='modal-link' onClick={copyLink}>
                <button>
                    {content.link}
                    <FiClipboard size={20} color='#fff' />
                </button>
            </div>

        </section >
    )
}