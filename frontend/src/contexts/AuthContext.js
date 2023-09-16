import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { authentication, db } from '../services/firebase-config';
import { AuthErrorHandler } from '../utils/handleFirebaseError';
import { isStringEmpty } from '../utils/string';
import ToastNotification from '../utils/toast';

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
    const [user, setUser] = useState();

    const [isLogged, setIsLogged] = useState(false);
    const [isMenuHide, setIsMenuHide] = useState(false);

    function getKeyLocalStorage(key) {
        return localStorage.getItem(key) === null
            ? false
            : localStorage.getItem(key);
    }
    function setKeyLocalStorage(key, value) {
        return localStorage.setItem(key, value);
    }
    function removeKeyLocalStorage(key) {
        const hasLocalStorageData = !(localStorage.getItem(key) === null);

        if (hasLocalStorageData) {
            localStorage.removeItem(key);
        }
    }

    async function updateUserByID(id, data) {
        const userData = await getUserByID(id);

        const userUpdated = {
            ...userData,
            ...data,
        };
        try {
            await setDoc(doc(db, 'users', id), userUpdated);

            setUser(userUpdated);

            return true;
        } catch (error) {
            console.error('updateUserByID error', error);
            ToastNotification.notify(
                'error',
                `Houve um erro ao atualizar dados do usuário. Tente novamente mais tarde`
            );
            return false;
        }
    }

    function logout() {
        signOut(authentication)
            .then(() => {
                setUser(null);
                setIsLogged(false);
                removeKeyLocalStorage('UID');
                localStorage.clear();
            })
            .catch((error) => {
                ToastNotification.notify(
                    'error',
                    `Houve um erro ao tentar sair. Tente novamente mais tarde`
                );
            });
    }

    function handleForgotUser(email) {
        if (isStringEmpty(email)) {
            ToastNotification.notify(
                'error',
                'O campo email não foi preenchido'
            );
            return true;
        }

        sendPasswordResetEmail(authentication, email)
            .then(() => {
                ToastNotification.notify(
                    'success',
                    'Foi enviado um email com as instruções de recuperação.'
                );
            })
            .catch((err) => {
                console.log('handleForgotUser error', err);
                ToastNotification.notify('error', AuthErrorHandler[err.code]);
            });
    }

    async function getUserByID(id) {
        const usersRef = doc(db, 'users', id);
        const userSnap = await getDoc(usersRef);
        const user = userSnap.data();

        return user;
    }

    function signInUser(email, password) {
        if (isStringEmpty(email)) {
            const status = {
                status: false,
                message: 'O campo email não foi preenchido',
            };
            return status;
        }
        if (isStringEmpty(password)) {
            const status = {
                status: false,
                message: 'O campo senha não foi preenchido',
            };
            return status;
        }

        return signInWithEmailAndPassword(authentication, email, password)
            .then(async (re) => {
                setIsLogged(true);
                setKeyLocalStorage('UID', re.user.uid);
                const currentUser = await getUserByID(re.user.uid);
                setUser(currentUser);
                const status = {
                    user: currentUser,
                    status: true,
                };
                return status;
            })
            .catch((err) => {
                const status = {
                    status: false,
                    message: AuthErrorHandler[err.code],
                    err,
                };

                console.log('signInUser error', status);
                return status;
            });
    }

    async function RegisterUser({ email, password, user }) {
        return createUserWithEmailAndPassword(authentication, email, password)
            .then(async (re) => {
                const newUser = {
                    uid: re.user.uid,
                    ...user,
                };
                try {
                    await setDoc(doc(db, 'users', re.user.uid), newUser);

                    setKeyLocalStorage('UID', re.user.uid);

                    setUser(newUser);
                    return true;
                } catch (err) {
                    ToastNotification.notify(
                        'error',
                        'Houve um erro ao cadastrar o usuario. Tente novamente mais tarde'
                    );
                    return false;
                }
            })
            .catch((err) => {
                ToastNotification.notify('error', AuthErrorHandler[err.code]);
                return false;
            });
    }

    useEffect(() => {
        const value = localStorage.getItem('@isMenuHide');
        if (value !== null) {
            setIsMenuHide(JSON.parse(value));
        } else {
            localStorage.setItem('@isMenuHide', 'false');
        }
    }, []);

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(async (user) => {
            if (user) {
                setIsLogged(true);
                setKeyLocalStorage('UID', user.uid);
                const loggedUser = await getUserByID(user.uid);
                setUser(loggedUser);
            } else {
                setIsLogged(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                RegisterUser,
                signInUser,
                logout,
                handleForgotUser,
                isLogged,
                getUserByID,
                isMenuHide,
                setIsMenuHide,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
