import { apiMiddleware } from 'redux-api-middleware';

import messageMiddleware from './messages';

export default [
    apiMiddleware,
    messageMiddleware
];