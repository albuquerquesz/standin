export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname.startsWith('/api/')) {
            url.hostname = 'api-5a53d3-standin.guaracloud.com';
            url.pathname = url.pathname.slice(4);
            return fetch(new Request(url, request));
        }
        return env.ASSETS.fetch(request);
    },
};
