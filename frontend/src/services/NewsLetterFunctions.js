import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import ToastNotification from '../utils/toast';
import { db } from './firebase-config';

async function addEmailIntoNewsletter(email) {
    try {
        // Verificando se o email ja está cadastrado
        const newsletterRef = collection(db, 'newsletter');
        const newsletterSnap = await getDocs(
            query(newsletterRef, where('email', '==', email))
        )
            .then((snap) => {
                const newsletterArray = [];
                snap.docs.forEach((doc) => {
                    newsletterArray.push(doc.data());
                });

                return newsletterArray.length === 0;
            })
            .catch((error) => {
                console.log('newsletterSnap error', error);
            });

        if (!newsletterSnap) {
            ToastNotification.notify(
                'error',
                'Parece que você já cadastrou este email.'
            );

            return false;
        }

        const data = {
            email,
            optInDate: Date.now(),
            active: true,
            optOutDate: '',
        };

        await addDoc(newsletterRef, data);

        return true;
    } catch (error) {
        console.log('addEmailIntoNewsletter', error);
        return false;
    }
}

export { addEmailIntoNewsletter };
