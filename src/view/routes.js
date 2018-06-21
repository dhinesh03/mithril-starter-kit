import PageLayout from './components/page-layout';

// Individual pages
import IndexPage from './pages/landing-page';
import Splash    from './pages/splash-page';

const Routes = {
    '/splash': PageLayout(Splash),
    '/index': PageLayout(IndexPage),
};

const DefaultRoute = '/splash';

export { Routes, DefaultRoute };