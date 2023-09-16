import {
    faBars,
    faCheck,
    faEdit,
    faExclamationCircle,
    faImage,
    faPlus,
    faTimes,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { uploadImageAsync } from '../../../contexts/ChallengesContext';
import { useChallenges } from '../../../hooks/useChallenges';
import ToastNotification from '../../../utils/toast';
import * as S from './styled';

export default function AdminChallenges() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const {
        challengesList,
        addChallenge,
        handleDeleteChallenge,
    } = useChallenges();
    const [clicked, setClicked] = useState(false);

    const [imagePreview, setImagePreview] = useState(null);

    const formSchema = useMemo(() => {
        return Yup.object().shape({
            name: Yup.string().required('O campo Nome é obrigatório'),
            description: Yup.string().required(
                'O campo Descrição é obrigatório'
            ),
            type: Yup.string().required('O campo Tipo é obrigatório'),
            level: Yup.string().required('O campo Dificuldade é obrigatório'),
            techs: Yup.array()
                .of(Yup.string())
                .min(1, 'Selecione pelo menos uma linguagem')
                .required('O campo Linguagens é obrigatório'),
            background: Yup.mixed()
                .test('fileFormat', 'A imagem deve ser PNG ou JPG', (value) => {
                    if (!value) {
                        return true;
                    }
                    const supportedFormats = ['image/png', 'image/jpeg'];
                    return supportedFormats.includes(value.type);
                })
                .required('O campo Imagem é obrigatório'),
            active: Yup.boolean(),
            githubRepository: Yup.string().required(
                'O campo Repositório é obrigatório'
            ),
            username: Yup.string().required(
                'O campo Usuário github é obrigatório'
            ),
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            type: '',
            level: '',
            username: '',
            githubRepository: '',
            techs: [],
            background: null,
            active: true,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            handleSubmitForm(values);
        },
    });

    const handleRemoveTech = (index) => {
        const result = formik.values.techs.filter(
            (_, currentIndex) => !(currentIndex === index)
        );
        formik.setFieldValue('techs', result);
    };

    const handleSubmitForm = async (formValues) => {
        let uploadURLImage = await uploadImageAsync(
            formValues.background,
            'challenges'
        );

        const data = {
            type: formValues.type,
            level: formValues.level,
            techs: formValues.techs,
            githubRepository: formValues.githubRepository,
            username: formValues.username,
            background: uploadURLImage,
            name: formValues.name,
            description: formValues.description,
            createdAt: Date.now(),
            active: formValues.active,
        };

        await addChallenge(data);
        ToastNotification.notify('success', 'Desafio adicionado :)');
        setOpen(false);
    };

    useEffect(() => {
        setClicked(false);
    }, [location]);

    return (
        <>
            {open && (
                <S.Modal>
                    <S.ModalCard>
                        <S.Row
                            style={{
                                justifyContent: 'space-between',
                                marginBottom: '16px',
                                width: '100%',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <S.Subtitle>Adicionar Desafio</S.Subtitle>

                            <S.IconButton
                                onClick={() => setOpen(false)}
                                style={{
                                    backgroundColor: 'var(--tertiary)',
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </S.IconButton>
                        </S.Row>
                        <S.Row
                            style={{
                                width: '100%',
                            }}
                        >
                            <S.Form onSubmit={formik.handleSubmit}>
                                <S.Col
                                    style={{
                                        width: '100%',
                                        alignItems: 'center',
                                    }}
                                >
                                    <S.UploadLabel htmlFor="background">
                                        {!imagePreview ? (
                                            <>
                                                Enviar imagem
                                                <FontAwesomeIcon
                                                    icon={faImage}
                                                />
                                            </>
                                        ) : (
                                            <S.ImageRow
                                                src={imagePreview}
                                                style={{
                                                    padding: '4px',
                                                    borderRadius: '4px',
                                                    width: '100%',
                                                    height: '100%',
                                                    aspectRatio: '16/9',
                                                }}
                                            />
                                        )}
                                        <input
                                            id="background"
                                            type="file"
                                            hidden
                                            onChange={(event) => {
                                                formik.setFieldValue(
                                                    'background',
                                                    event.target.files[0]
                                                );

                                                console.log(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                );
                                                setImagePreview(
                                                    URL.createObjectURL(
                                                        event.target.files[0]
                                                    )
                                                );
                                            }}
                                            accept="image/*"
                                        />
                                    </S.UploadLabel>
                                    {formik.errors.background && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.background}
                                        </S.Paragraph>
                                    )}
                                </S.Col>
                                <S.InputGroup>
                                    <S.InputLabel>Nome do desafio</S.InputLabel>
                                    <S.InputText
                                        type="text"
                                        value={formik.values.name}
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'name',
                                                event.target.value
                                            )
                                        }
                                    />
                                    {formik.errors.name && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.name}
                                        </S.Paragraph>
                                    )}
                                </S.InputGroup>

                                <S.InputGroup>
                                    <S.InputLabel>
                                        Nome do Usuário github
                                    </S.InputLabel>
                                    <S.InputText
                                        type="text"
                                        value={formik.values.username}
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'username',
                                                event.target.value
                                            )
                                        }
                                    />
                                    {formik.errors.username && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.username}
                                        </S.Paragraph>
                                    )}
                                </S.InputGroup>

                                <S.InputGroup>
                                    <S.InputLabel>
                                        Link do repositório
                                    </S.InputLabel>
                                    <S.InputText
                                        type="text"
                                        value={formik.values.githubRepository}
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'githubRepository',
                                                event.target.value
                                            )
                                        }
                                    />
                                    {formik.errors.githubRepository && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.githubRepository}
                                        </S.Paragraph>
                                    )}
                                </S.InputGroup>

                                <S.InputGroup>
                                    <S.InputLabel>Tipo</S.InputLabel>
                                    <S.Select
                                        value={formik.values.type}
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'type',
                                                event.target.value
                                            )
                                        }
                                    >
                                        <option value="Back-end">
                                            Back-end
                                        </option>
                                        <option value="Front-end">
                                            Front-end
                                        </option>
                                        <option value="Mobile">Mobile</option>
                                    </S.Select>
                                    {formik.errors.type && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.type}
                                        </S.Paragraph>
                                    )}
                                </S.InputGroup>

                                <S.InputGroup>
                                    <S.InputLabel>Dificuldade</S.InputLabel>
                                    <S.Select
                                        value={formik.values.level}
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'level',
                                                event.target.value
                                            )
                                        }
                                    >
                                        <option value="Iniciante">
                                            Iniciante
                                        </option>
                                        <option value="Intermediário">
                                            Intermediário
                                        </option>
                                        <option value="Avançado">
                                            Avançado
                                        </option>
                                    </S.Select>
                                    {formik.errors.level && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.level}
                                        </S.Paragraph>
                                    )}
                                </S.InputGroup>

                                <S.InputGroup>
                                    <S.InputLabel>Linguagens</S.InputLabel>
                                    <S.Select
                                        onChange={(event) =>
                                            formik.setFieldValue('techs', [
                                                ...formik.values.techs,
                                                event.target.value,
                                            ])
                                        }
                                    >
                                        <option value="React Native">
                                            React Native
                                        </option>
                                        <option value="ReactJS">ReactJS</option>
                                        <option value="Javascript">
                                            Javascript
                                        </option>
                                        <option value="Typescript">
                                            Typescript
                                        </option>
                                        <option value="Flutter">Flutter</option>
                                        <option value="Kotlin">Kotlin</option>
                                        <option value="Swift">Swift</option>
                                        <option value="Vue">Vue</option>
                                        <option value="Angular">Angular</option>
                                        <option value="Python">Python</option>
                                        <option value="NodeJS">NodeJS</option>
                                        <option value="Ruby">Ruby</option>
                                        <option value="PHP">PHP</option>
                                        <option value="Java">Java</option>
                                        <option value="Escolha livre">
                                            Escolha livre
                                        </option>
                                    </S.Select>
                                    {formik.errors.techs && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.techs}
                                        </S.Paragraph>
                                    )}
                                    {formik.values.techs.length > 0 &&
                                        formik.values.techs.map(
                                            (tech, index) => (
                                                <S.Row
                                                    key={index}
                                                    style={{
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <S.Paragraph>
                                                        {tech}
                                                    </S.Paragraph>
                                                    <S.IconButton
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveTech(
                                                                index
                                                            )
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                'var(--red)',
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                        />
                                                    </S.IconButton>
                                                </S.Row>
                                            )
                                        )}
                                </S.InputGroup>

                                <S.InputGroup>
                                    <S.InputLabel>Descrição</S.InputLabel>
                                    <S.Textarea
                                        value={formik.values.description}
                                        onChange={(event) =>
                                            formik.setFieldValue(
                                                'description',
                                                event.target.value
                                            )
                                        }
                                    >
                                        {formik.values.description}
                                    </S.Textarea>

                                    {formik.errors.description && (
                                        <S.Paragraph
                                            style={{ color: 'var(--red)' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faExclamationCircle}
                                            />
                                            {formik.errors.description}
                                        </S.Paragraph>
                                    )}
                                </S.InputGroup>
                                <S.Button
                                    type="submit"
                                    style={{ justifyContent: 'center' }}
                                >
                                    Adicionar desafio
                                </S.Button>
                            </S.Form>
                        </S.Row>
                    </S.ModalCard>
                </S.Modal>
            )}
            <S.Header>
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                    }}
                >
                    <S.Title>
                        <S.StyledLink to="/" exact>
                            Dev<span>Challenge</span>
                        </S.StyledLink>
                    </S.Title>
                    <S.Title style={{ fontSize: 14, fontWeight: 'normal' }}>
                        Area administrativa
                    </S.Title>
                </div>

                <S.MenuMobile onClick={() => setClicked(!clicked)}>
                    {!clicked ? (
                        <FontAwesomeIcon icon={faBars} />
                    ) : (
                        <FontAwesomeIcon icon={faTimes} />
                    )}
                </S.MenuMobile>

                <S.Menu open={!clicked}>
                    <ul>
                        <li>
                            <S.StyledLink
                                activeClassName="is-active"
                                to="/admin/home"
                                exact
                            >
                                Início
                            </S.StyledLink>
                        </li>
                        <li>
                            <S.StyledLink
                                activeClassName="is-active"
                                to="/admin/challenges"
                            >
                                Desafios
                            </S.StyledLink>
                        </li>
                        <li>
                            <S.StyledLink
                                activeClassName="is-active"
                                to="/admin/devs"
                            >
                                Comunidade
                            </S.StyledLink>
                        </li>
                    </ul>
                </S.Menu>
            </S.Header>

            <S.Main>
                <S.Row
                    style={{
                        justifyContent: 'space-between',
                        marginBottom: '16px',
                    }}
                >
                    <S.Subtitle>Desafios cadastrados</S.Subtitle>
                    <S.Button onClick={() => setOpen(true)}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Adicionar</span>
                    </S.Button>
                </S.Row>

                <table>
                    <thead>
                        <tr style={{ margin: '8px 0' }}>
                            <td>
                                <S.Paragraph>
                                    <b>Imagem</b>
                                </S.Paragraph>
                            </td>
                            <td>
                                <S.Paragraph>
                                    <b>Nome do desafio</b>
                                </S.Paragraph>
                            </td>
                            <td>
                                <S.Paragraph>
                                    <b>Tecnologia</b>
                                </S.Paragraph>
                            </td>
                            <td>
                                <S.Paragraph>
                                    <b>Tipo</b>
                                </S.Paragraph>
                            </td>
                            <td>
                                <S.Paragraph>
                                    <b>Dificuldade</b>
                                </S.Paragraph>
                            </td>
                            <td>
                                <S.Paragraph>
                                    <b>Visível</b>
                                </S.Paragraph>
                            </td>
                            <td>
                                <S.Paragraph>
                                    <b>Ações</b>
                                </S.Paragraph>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {challengesList.map((item) => (
                            <tr>
                                {console.log(item)}
                                <td>
                                    <S.ImageRow
                                        src={item.background}
                                        alt={item.name}
                                    />
                                </td>
                                <td>
                                    <S.Paragraph>{item.name}</S.Paragraph>
                                </td>
                                <td>
                                    <S.Paragraph>{item.type}</S.Paragraph>
                                </td>
                                <td>
                                    <S.Paragraph>
                                        {item.techs.join(',')}
                                    </S.Paragraph>
                                </td>
                                <td>
                                    <S.Paragraph>{item.level}</S.Paragraph>
                                </td>
                                <td>
                                    <S.IconButton
                                        style={{
                                            backgroundColor: item.active
                                                ? 'var(--green)'
                                                : 'var(--red)',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={
                                                item.active ? faCheck : faTimes
                                            }
                                        />
                                    </S.IconButton>
                                </td>
                                <td>
                                    <S.Row
                                        style={{
                                            gap: '8px',
                                        }}
                                    >
                                        <S.IconButton
                                            onClick={() =>
                                                handleDeleteChallenge(item.id)
                                            }
                                            style={{
                                                backgroundColor: '#E50000',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </S.IconButton>

                                        {/* <S.IconButton
                                            style={{
                                                backgroundColor: '#00b200',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </S.IconButton> */}
                                    </S.Row>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </S.Main>
        </>
    );
}
