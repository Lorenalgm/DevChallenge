import React, { useState } from 'react';
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

export default function Submit() {
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('iniciante');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [languages, setLanguages] = useState('');
    const [link, setLink] = useState('');

    function set(data) {
        let newString = '';
        if (category.includes(data)) {
            newString = category.replace(data, '');
        } else {
            newString = category.concat(` ${data}`);
        }
        setCategory(newString.trim());
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
                    </S.Form>
                </S.Container>
            </S.Section>
        </>
    );
}
