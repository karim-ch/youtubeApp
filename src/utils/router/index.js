import { forEach } from 'lodash';

export function applyRoutes(routes = [], router) {
    forEach(routes, ({ method, path, handler }) => {
        router[method](path, handler);
    });
}