export const routeHandler = (url) => {
    window.location.replace(url)
}

export const homeRoute = () => {
    routeHandler(window.location.origin)
}