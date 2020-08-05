import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/50275354?s=460&u=ab6a13576a9ed46db6faa2376c5ae2311bc492d3&v=4" alt="Camilla Correia"/>
                <div>
                    <strong>Camilla Correia</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusista das melhores tecnologias.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;