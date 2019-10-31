import './styles.scss';

/**
 * A component that wraps another component with some common
 * page layout markup and styles.
 */
export default function() {
    return {
        view: vnode => m('.page-layout', vnode.children),
    };
}
