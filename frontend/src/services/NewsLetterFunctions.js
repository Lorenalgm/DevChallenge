import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase-config';

async function addEmailIntoNewsletter(email) {
    try {
        const data = {
            email,
            optInDate: Date.now(),
            active: true,
            optOutDate: '',
        };

        const newsletterRef = collection(db, 'newsletter');

        await addDoc(newsletterRef, data);
    } catch (error) {
        console.log('addEmailIntoNewsletter', error);
    }
}

export { addEmailIntoNewsletter };
