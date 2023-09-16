/* eslint-disable no-restricted-globals */
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    setDoc,
} from 'firebase/firestore';
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { db, storage } from '../services/firebase-config';

export function deleteImageFromStorage(imagePath) {
    if (!imagePath) return;

    const imageRef = ref(storage, imagePath);

    return deleteObject(imageRef)
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.log('deleteImageFromStorage error', error);
            return false;
        });
}

export async function uploadImageAsync(file, path) {
    if (!file) return;

    const storageRef = ref(
        storage,
        `/${path}/${Date.now()}-${encodeURI(file.name)}`
    );
    await uploadBytesResumable(storageRef, file);

    return getDownloadURL(storageRef);
}

export const ChallengesContext = createContext({});

export function ChallengesContextProvider(props) {
    const [challengesList, setChallengesList] = useState([]);

    const [selectedChallenge, setSelectedChallenge] = useState(false);

    async function getAllChallenges() {
        const contactsRef = collection(db, 'challenges');
        const result = getDocs(query(contactsRef, orderBy('createdAt', 'desc')))
            .then((snap) => {
                let challengeList = [];
                snap.docs.forEach((doc) => {
                    challengeList.push({ ...doc.data(), id: doc.id });
                });
                return challengeList;
            })
            .catch((error) => {
                console.log('getAllChallenges error', error);
                return [];
            });

        return result;
    }

    async function getChallengeByID(id) {
        const challengeRef = doc(db, 'challenges', id);
        const challengeSnap = await getDoc(challengeRef);
        const challenge = challengeSnap.data();
        return challenge;
    }

    async function updateChallenge(data) {
        await setDoc(doc(db, 'challenges', data.id), data);

        await updateChallengesList();
    }

    async function addChallenge(data) {
        const challengeRef = collection(db, 'challenges');
        await addDoc(challengeRef, data);

        await updateChallengesList();
    }

    async function handleDeleteChallenge(id) {
        const response = confirm(
            'Deseja realmente deletar esse registro? Esta ação é irreverssível'
        );
        if (response) {
            const challenge = await getChallengeByID(id);
            deleteImageFromStorage(challenge.avatar);
            await deleteDoc(doc(db, 'challenges', id));
        }
        await updateChallengesList();
    }

    const updateChallengesList = useCallback(async () => {
        const response = await getAllChallenges();
        setChallengesList(response);
    }, []);

    useEffect(() => {
        const executeAsync = async () => {
            await updateChallengesList();
        };
        executeAsync();
    }, [updateChallengesList]);

    return (
        <ChallengesContext.Provider
            value={{
                challengesList,
                selectedChallenge,
                setSelectedChallenge,
                updateChallengesList,
                handleDeleteChallenge,
                addChallenge,
                updateChallenge,
                getChallengeByID,
            }}
        >
            {props.children}
        </ChallengesContext.Provider>
    );
}
