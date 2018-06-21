// Load application level styles
import './app.scss';

// Load individual pages
import IndexPage from './pages/landing-page';
import Splash    from './pages/splash-page';

const Routes = {
    '/splash': Splash,
    '/index': IndexPage,
};

const DefaultRoute = '/splash';

export { Routes, DefaultRoute };