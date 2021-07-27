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
    const methodStr = method;
    method = toast[method];
    method(messages[methodStr](msg));
  },
};

export default ToastNotification;
