if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}


//Define your routes here
var IndexPage = require('../src/views/landing-page');
var Splash = require('../src/views/splash-page');

m.route(document.body.querySelector('#root'), '/splash', {
    '/splash': Splash,
    '/index': IndexPage,
});