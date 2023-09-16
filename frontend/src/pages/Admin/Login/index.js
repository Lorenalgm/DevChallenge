import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import * as Yup from 'yup';
import * as S from './styled';

export default function AdminLogin() {
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

    const handleSubmitForm = async (formValues) => {};

    return (
        <>
            <S.Main>
                <S.InputGroup>
                    <S.InputLabel>Nome do desafio</S.InputLabel>
                    <S.InputText
                        type="text"
                        value={formik.values.name}
                        onChange={(event) =>
                            formik.setFieldValue('name', event.target.value)
                        }
                    />
                    {formik.errors.name && (
                        <S.Paragraph style={{ color: 'var(--red)' }}>
                            <FontAwesomeIcon icon={faExclamationCircle} />
                            {formik.errors.name}
                        </S.Paragraph>
                    )}
                </S.InputGroup>
                <S.InputGroup>
                    <S.InputLabel>Nome do desafio</S.InputLabel>
                    <S.InputText
                        type="text"
                        value={formik.values.name}
                        onChange={(event) =>
                            formik.setFieldValue('name', event.target.value)
                        }
                    />
                    {formik.errors.name && (
                        <S.Paragraph style={{ color: 'var(--red)' }}>
                            <FontAwesomeIcon icon={faExclamationCircle} />
                            {formik.errors.name}
                        </S.Paragraph>
                    )}
                </S.InputGroup>
            </S.Main>
        </>
    );
}
