import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import api from '../../services/api';
import ToastNotification from '../../utils/toast';

import * as S from './styled';
import { useTranslation } from 'react-i18next';

export default function Newsletter() {
    // i18n -> it'll get the translation
    const { t } = useTranslation();

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
                    {t('Newsletter.title')}
                </S.NewsletterTitle>
                <S.NewsletterParagraph>
                    {t('Newsletter.description')}
                </S.NewsletterParagraph>
                <S.NewsletterForm onSubmit={handleSubscribe}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">{t('Newsletter.button')}</button>
                </S.NewsletterForm>
            </div>
        </S.NewsletterContainer>
    );
}
