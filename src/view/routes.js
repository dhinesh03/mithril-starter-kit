import PageLayout from './components/page-layout';

// Individual pages
import IndexPage from './pages/landing-page';
import Splash from './components/splash-loader/index';
import MaintenancePage from './components/maintenance-layout/index';

const $root = document.body.querySelector('#root');

const Routes = {
    '/splash': {
        render: function() {
            return m(PageLayout, m(Splash));
        },
    },
    '/index': {
        onmatch() {
            return new Promise((resolve/*, reject*/) => {
                //Fetch all necessary data here
                setTimeout(function() {
                    resolve();
                }, 0);
            }).catch((/* e */) => {
                // In case of server error we can show the maintenance page.
                return MaintenancePage;
            });
        },
        render(vnode) {
            if (typeof vnode.tag === 'function') {
                //If onmatch returns a component or a promise that resolves to a component, comes here.
                return vnode;
            }
            return m(PageLayout, m(IndexPage));
        },
    },
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute };