let Router = function () {
    this.routes = {};
};

Router.prototype.bind = function (url, method, action) {
    const key = `${method}:${url}`;
    this.routes[key] = action;
};

Router.prototype.runRequest = function (url, method) {
    const key = `${method}:${url}`;
    const action = this.routes[key];
    if (action) {
        return action();
    }
    return "Error 404: Not Found";
};
