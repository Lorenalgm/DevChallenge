import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

export function mockApi() {
    return new MockAdapter(api);
}
