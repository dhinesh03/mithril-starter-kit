import './styles.scss';

/**
 * A component that will show the maintenance banner.
 */
export default function() {
    return {
        view: () => {
            return m('.maintenance', m('article', [
                m('h1', 'We\'ll be back soon!'),
                m('div',[
                    m('p', m.trust('Sorry for the inconvenience but we\'re performing some maintenance at the moment. If you need to you can always <a href="mailto:#">contact us</a>, otherwise we\'ll be back online shortly!')),
                    m('p', '- The Team'),
                ]),
            ]));
        },
    };
}