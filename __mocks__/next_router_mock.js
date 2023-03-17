import { RouterContext } from 'next/dist/shared/lib/router-context';

export const useRouter = () => {
    return {
        route: '/',
        pathname: '/',
        query: {},
        asPath: '/',
        push: async () => true,
        replace: async () => true,
        reload: () => null,
        back: () => null,
        prefetch: async () => undefined,
        beforePopState: () => null,
        events: {
            on: () => null,
            off: () => null,
            emit: () => null,
        },
        isFallback: false,
    };
};

export const Router = {
    events: {
        on: () => null,
        off: () => null,
        emit: () => null,
    },
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    asPath: '/',
    route: '/',
    pathname: '/',
    query: {},
    isFallback: false,
};

export function withRouter(Component) {
    return function WithRouterWrapper(props) {
        return (
            <RouterContext.Provider value={useRouter()}>
                <Component {...props} />
            </RouterContext.Provider>
        );
    };
}
``
