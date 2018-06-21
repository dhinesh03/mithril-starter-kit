import './styles.scss';

/**
 * A component that wraps another component with some common
 * page layout markup and styles.
 */
export default function(WrappedComponent) {
    return {
        view: () => m('.page-layout', [
            m(WrappedComponent),
        ]),
    };
}