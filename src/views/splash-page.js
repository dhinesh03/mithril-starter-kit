
module.exports = function (vnode) {
    var looper = null;
    var routeToMainInvokedCount = 0;
    return {
        routeToMain() {
            routeToMainInvokedCount++;
            if (vnode.state.dataLoaded) {
                clearTimeout(looper);
                m.route.set('/index');
            }
        },
        oninit() {
            this.dataLoaded = false;
            Promise.all([
                // Fetch all necessary data here
            ]).then(() => {
                this.dataLoaded = true;
                if (routeToMainInvokedCount) {
                    this.routeToMain();
                }
            });
        },
        oncreate(/*vnode*/) {
            console.log('DOM created');
            looper = setTimeout(this.routeToMain, 2000);
        },
        view(/*vnode*/) {
            return m('.holder', [
                m('.preloader', [
                    m('div'),
                    m('div'),
                    m('div'),
                    m('div'),
                    m('div'),
                    m('div'),
                    m('div'),
                ]),
            ]);
        },
    };
};