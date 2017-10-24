module.exports = function(/*vnode*/) {
   
    return {
        oninit: function(/*vnode*/) {
            console.log('initialized');
        },
        oncreate: function(/*vnode*/) {
            console.log('DOM created');
        },
        onbeforeupdate(/*vnode, old*/) {
            console.log('onbeforeupdate');
            return true;
        },
        onupdate: function(/*vnode*/) {
            console.log('DOM updated');
        },
        onbeforeremove: function(/*vnode*/) {
            console.log('exit animation can start');
            return new Promise(function(resolve) {
                // call after animation completes
                resolve();
            });
        },
        onremove: function(/*vnode*/) {
            console.log('removing DOM element');
        },
        view: function(/*vnode*/) {
            return m('div', [
                m('h2', 'Congratulations, you made it!'),
                m('p', 'You\'ve spun up your very first Mithril app :-)'),
            ]);
        },
    };
};