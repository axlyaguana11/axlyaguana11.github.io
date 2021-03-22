class Router {
    constructor(routes) {
        this.routes = routes
        this._loadInitialRoute()
    }

_matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find( route => {
        const routePathSegs = route.path.split('/').slice(1)

        if(routePathSegs.length !== urlSegs.length) {
            return false
        }

        return routePathSegs
            .every((routePathSegs, i) => routePathSeg === urlSegs[i])
    })

    return matchedRoute
}

_loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split('/')
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : ''

    this.loadRoute(...pathSegs)
}
}