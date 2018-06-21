/* Import all vendor.scss / css here[e.g. Import 'font-awesome/scss/font-awesome.scss';] */
import { Routes, DefaultRoute } from './view/routes';

if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

// Wire up mithril app to DOM
const $root = document.body.querySelector('#root');
m.route($root, DefaultRoute, Routes);