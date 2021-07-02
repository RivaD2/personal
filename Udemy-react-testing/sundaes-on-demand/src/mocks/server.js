import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// configures a request mocking server with given request handlers
export const server = setupServer(...handlers);