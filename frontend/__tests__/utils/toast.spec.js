import { toast } from 'react-toastify';
import ToastNotification from '../../src/utils/toast';

jest.mock('react-toastify');

describe(ToastNotification.notify, () => {
    const mock = { msg: { error: 'this is an error message' } };

    beforeEach(() => {
        toast.mockReturnValue({
            error: jest.fn(),
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
});
