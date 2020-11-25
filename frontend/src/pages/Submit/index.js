import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

import * as S from './styled';
import Header from '../../components/Header';

const levels = [
    { id: 1, title: 'iniciante' },
    { id: 2, title: 'intermediário' },
    { id: 3, title: 'avançado' },
];
const categories = [
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Mobile' },
];

const linkVerify = /^https:\/\/[A-z]/;

export default function Submit() {
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('iniciante');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [languages, setLanguages] = useState('');
    const [link, setLink] = useState('');
    const [imageLink, setImageLink] = useState([]);
    const [imageInput, setImageInput] = useState('');

    function set(data) {
        let newString = '';
        if (category.includes(data)) {
            newString = category.replace(data, '');
        } else {
            newString = category.concat(` ${data}`);
        }
        setCategory(newString.trim());
    }

    async function addLink() {
        console.log(linkVerify.test(imageInput));
        if (imageInput !== '' && linkVerify.test(imageInput)) {
            await fetch(`${imageInput}`).then((response) => {
                if (response.ok) {
                    setImageLink([...imageLink, imageInput]);
                    setImageInput('');
                }
            });
        }
    }

    function removeImageItem(index) {
        const updatedLinkImages = imageLink.filter((item, i) => i !== index);
        setImageLink(updatedLinkImages);
    }

    function submitForm() {}

    function clearForm() {
        setCategory('');
        setDescription('');
        setTitle('');
        setLink('');
        setImageLink([]);
        setImageInput('');
    }

    return (
        <>
            <Header />
            <S.Section>
                <S.Container>
                    <S.Title>Submissão de desafios</S.Title>
                    <S.Form>
                        <S.Field>
                            <S.Label>Categoria</S.Label>
                            <S.Select>
                                {categories.map((categoryItem) => (
                                    <S.Item
                                        type="category"
                                        selected={category.includes(
                                            categoryItem.title
                                        )}
                                        onClick={() => set(categoryItem.title)}
                                        key={categoryItem.id}
                                    >
                                        {categoryItem.title}
                                    </S.Item>
                                ))}
                            </S.Select>
                        </S.Field>
                        <S.Field>
                            <S.Label>Nível</S.Label>
                            <S.Select>
                                {levels.map((levelItem) => (
                                    <S.Item
                                        type="level"
                                        selected={level === levelItem.title}
                                        onClick={() =>
                                            setLevel(levelItem.title)
                                        }
                                        key={levelItem.id}
                                    >
                                        {levelItem.title}
                                    </S.Item>
                                ))}
                            </S.Select>
                        </S.Field>
                        <S.Field>
                            <S.Label>Título</S.Label>
                            <S.Input
                                placeholder="Ex: Amazing Graph"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </S.Field>
                        <S.Field>
                            <S.Label>Descrição</S.Label>
                            <S.Textarea
                                rows="5"
                                placeholder="Ex: Seu desafio será criar uma landing page sobre um site de criação de gráficos"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </S.Field>

                        <S.Field>
                            <S.Label>Imagens</S.Label>

                            <S.Input
                                type="url"
                                placeholder="https://LinkDaImagem.com"
                                onChange={(e) => setImageInput(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        addLink();
                                    }
                                }}
                                required
                                value={imageInput}
                            />

                            <S.AddLinkButton onClick={addLink}>
                                Add Image +
                            </S.AddLinkButton>

                            <S.PreviewList>
                                {imageLink.map((linkItem, i) => (
                                    <li key={linkItem}>
                                        <S.ImagePreview src={linkItem} alt="" />
                                        <button
                                            type="button"
                                            onClick={() => removeImageItem(i)}
                                        >
                                            <FiXCircle size="30" />
                                        </button>
                                    </li>
                                ))}
                            </S.PreviewList>
                        </S.Field>

                        <S.Field>
                            <S.Label>Linguagens</S.Label>
                            <S.Input
                                placeholder="Ex: HTML, CSS"
                                value={languages}
                                onChange={(e) => setLanguages(e.target.value)}
                            />
                        </S.Field>
                        <S.Field>
                            <S.Label>
                                Informe o link do desafio no github
                            </S.Label>
                            <S.Input
                                placeholder="Ex: https://github.com/Lorenalgm/AmazingGraph"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </S.Field>
                        <S.Actions>
                            <S.Button type="reset" onClick={clearForm}>
                                Limpar
                            </S.Button>
                            <S.Button type="submit" onClick={submitForm}>
                                Enviar
                            </S.Button>
                        </S.Actions>
                    </S.Form>
                </S.Container>
            </S.Section>
        </>
    );
}
