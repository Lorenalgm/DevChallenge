import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import api from '../../services/api';
import ToastNotification from '../../utils/toast';

import * as S from './styled';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    async function handleSubscribe(e) {
        e.preventDefault();

        const data = {
            email,
        };

        try {
            await api.post('newsletter', data);
            ToastNotification.notify(
                'success',
                'Feito! Você será o primeiro a saber sobre novos desafios :)'
            );
        } catch (err) {
            ToastNotification.notify(
                'error',
                'Opa, algo deu errado! Pode tentar novamente? :c'
            );
        }
    }

    return (
        <S.NewsletterContainer>
            <div>
                <Player
                    autoplay={true}
                    controls={false}
                    loop={true}
                    src="https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json"
                    style={{ height: '300px', width: '300px' }}
                />
            </div>
            <div>
                <S.NewsletterTitle>
                    Seja notificado sobre novos desafios!
                </S.NewsletterTitle>
                <S.NewsletterParagraph>
                    Inscreva-se para ser o primeiro a saber sobre novos desafios
                    :)
                </S.NewsletterParagraph>
                <S.NewsletterForm onSubmit={handleSubscribe}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Inscrever</button>
                </S.NewsletterForm>
            </div>
        </S.NewsletterContainer>
    );
}
