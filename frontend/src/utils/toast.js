import { toast } from 'react-toastify';

const messages = {
    error(msg) {
        return msg || 'Ocorreu um erro no processamento';
    },
    success(msg) {
        return msg || 'Sucesso';
    },
};

const ToastNotification = {
    notify: (method, msg) => {
        const toastFn = toast[method];
        const message = messages[method](msg);

        toastFn(message);
    },
};

export default ToastNotification;
