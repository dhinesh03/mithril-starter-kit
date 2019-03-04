export default function() {
    var count = 0; // added a variable
    return {
        view: function() {
            return m('main', [
                m('h1', {
                    class: 'title',
                }, 'My first component'),
                // changed the next line
                m('button', {
                    onclick: function() {
                        count++;
                    },
                }, count + ' clicks'),
            ]);
        },
    };
}