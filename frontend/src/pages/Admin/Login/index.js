import {
    faExclamationCircle,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../../hooks/useAuth';
import * as S from './styled';

export default function AdminLogin() {
    const { signInUser, RegisterUser } = useAuth();
    const history = useHistory();

    const [isShow, setIsShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const formSchema = useMemo(() => {
        return Yup.object().shape({
            email: Yup.string().required('O campo Email é obrigatório'),
            password: Yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('A senha é obrigatória'),
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            handleSubmitForm(values);
        },
    });

    const handleSubmitForm = async (formValues) => {
        try {
            const isLogged = await signInUser(
                formValues.email,
                formValues.password
            );
            if (isLogged.status) {
                if (isLogged.user.active) {
                    history.push('/admin/challenges');
                } else {
                    alert(
                        'Solicite permissão ao administrador para acessar o sistema'
                    );
                }
            } else {
                alert(isLogged.message);
                setShowRegister(true);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleRegister = async () => {
        try {
            const isRegistered = await RegisterUser({
                email: formik.values.email,
                password: formik.values.password,
                user: {
                    email: formik.values.email,
                    password: formik.values.password,
                    active: false,
                },
            });
            if (isRegistered) {
                alert(
                    'Solicite a liberação do acesso ao administrador do sistema'
                );
            } else {
                alert('Houve um problema ao cadastrar');
                setShowRegister(true);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <>
            <S.Main>
                <S.Row
                    style={{
                        width: '100%',
                        height: '50vh',
                        gap: '48px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <S.Col style={{ gap: '16px' }}>
                        <S.Title>
                            Dev<span>Challenge</span>
                        </S.Title>
                        <S.Paragraph>Desafie-se, aprenda e cresça!</S.Paragraph>
                    </S.Col>
                    <S.Col style={{ gap: '16px' }}>
                        <S.InputGroup>
                            <S.InputLabel>Email</S.InputLabel>
                            <S.InputText
                                type="email"
                                value={formik.values.email}
                                onChange={(event) =>
                                    formik.setFieldValue(
                                        'email',
                                        event.target.value
                                    )
                                }
                            />
                            {formik.errors.email && (
                                <S.Paragraph style={{ color: 'var(--red)' }}>
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    />
                                    {formik.errors.email}
                                </S.Paragraph>
                            )}
                        </S.InputGroup>
                        <S.InputGroup>
                            <S.InputLabel>Senha</S.InputLabel>
                            <S.Row
                                style={{
                                    width: '100%',
                                    gap: '4px',
                                    alignItems: 'center',
                                }}
                            >
                                <S.InputText
                                    style={{ width: '85%' }}
                                    type={isShow ? 'text' : 'password'}
                                    value={formik.values.password}
                                    onChange={(event) =>
                                        formik.setFieldValue(
                                            'password',
                                            event.target.value
                                        )
                                    }
                                />

                                <S.IconButton
                                    onClick={() => setIsShow(!isShow)}
                                    style={{
                                        backgroundColor: 'var(--yellow)',
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={isShow ? faEyeSlash : faEye}
                                    />
                                </S.IconButton>
                            </S.Row>
                            {formik.errors.password && (
                                <S.Paragraph style={{ color: 'var(--red)' }}>
                                    <FontAwesomeIcon
                                        icon={faExclamationCircle}
                                    />
                                    {formik.errors.password}
                                </S.Paragraph>
                            )}
                        </S.InputGroup>

                        <S.Button
                            onClick={formik.handleSubmit}
                            type="button"
                            style={{ justifyContent: 'center' }}
                        >
                            Entrar
                        </S.Button>
                        {showRegister && (
                            <S.Button
                                onClick={handleRegister}
                                type="button"
                                style={{
                                    justifyContent: 'center',
                                    border: '1px solid var(--yellow)',
                                    background: 'transparent',
                                    color: 'var(--yellow)',
                                }}
                            >
                                Cadastrar
                            </S.Button>
                        )}
                    </S.Col>
                </S.Row>
            </S.Main>
        </>
    );
}
