import { toast } from 'react-toastify';
import ToastNotification from '../../src/utils/toast';

jest.mock('react-toastify');

describe(ToastNotification.notify, () => {
    const mock = {
        msg: {
            error: 'this is an error message',
            success: 'this is an success message',
        },
    };

    beforeEach(() => {
        toast.mockReturnValue({
            error: jest.fn(),
            success: jest.fn(),
        });
    });

    describe('error method', () => {
        it('should call react-toastify', () => {
            ToastNotification.notify('error', mock.msg.error);
            expect(toast.error).toHaveBeenCalledWith(mock.msg.error);
        });

        it('should have an default message', () => {
            ToastNotification.notify('error');
            expect(toast.error).toHaveBeenCalledWith(
                'Ocorreu um erro no processamento'
            );
        });
    });

    describe('success method', () => {
        it('should call react-toastify', () => {
            ToastNotification.notify('success', mock.msg.success);
            expect(toast.success).toHaveBeenCalledWith(mock.msg.success);
        });

        it('should have an default message', () => {
            ToastNotification.notify('success');
            expect(toast.success).toHaveBeenCalledWith('Sucesso');
        });
    });
});
