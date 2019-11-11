import 'core-js/stable';
import 'regenerator-runtime/runtime';

/* Import all vendor.scss / css here[e.g. Import 'font-awesome/scss/font-awesome.scss';] */
import { Routes, DefaultRoute } from './view/routes';

/* Include global app styles here, so that it will over ride component's css styles*/
import './app.scss';

if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

console.log('Env var test ===>', process.env.BASE_URL, process.env.BASE_URL_EXPAND);
// Wire up mithril app to DOM
const $root = document.body.querySelector('#root');
m.route($root, DefaultRoute, Routes);
